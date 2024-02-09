import { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import argon from 'argon2';
import prisma from './prisma';

export const authOptions: AuthOptions = {
	// Configure one or more authentication providers
	providers: [
		Credentials({
			async authorize(credentials) {
				if (!credentials) {
					return null;
				}

				const { username, password } = credentials;

				const user = await prisma.user.findFirst({
					where: {
						username,
					},
				});

				if (!user) {
					return null;
				}

				const isValid = await argon.verify(user.passwordHash, password);

				if (!isValid) {
					return null;
				}
				return {
					id: user.id,
					username: user.username,
				};
			},
			credentials: {
				username: { label: 'Username', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
		}),
	],
	callbacks: {
		async session(params) {
			if (!params.token.sub) {
				return params.session;
			}

			const user = await prisma.user.findFirst({
				where: {
					id: params.token.sub,
				},
			});

			if (!user) {
				return params.session;
			}
			params.session.user = user;

			return params.session;
		},
	},
};
