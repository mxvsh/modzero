import { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import argon from 'argon2';
import prisma from './prisma';

export const authOptions: AuthOptions = {
	// Configure one or more authentication providers
	providers: [
		Credentials({
			async authorize(credentials, req) {
				const { username, password } = credentials as Record<string, string>;

				// todo: Add zod validation

				const user = await prisma.user.findUnique({
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
					name: user.username,
				};
			},
			credentials: {
				username: { label: 'Username', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
		}),
		// ...add more providers here
	],
};
