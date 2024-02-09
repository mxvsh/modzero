import { authOptions } from '~lib/auth';
import prisma from '~lib/prisma';
import trpc from '@trpc/server';
import { Session, getServerSession } from 'next-auth';

export async function createContext() {
	const session = (await getServerSession(authOptions)) as Session;

	return {
		prisma,
		session,
	};
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
