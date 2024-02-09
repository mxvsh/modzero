import { publicProcedure } from '~server/trpc';

export const ping = publicProcedure.query(() => {
	return 'pong';
});
