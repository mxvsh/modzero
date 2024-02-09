import { z } from 'zod';
import { Bot } from 'grammy/web';
import { protectedProcedure } from '~server/trpc';
import prisma from '~lib/prisma';

// Use Vercel environment variable to determine if the app is running on Vercel
const IS_VERCEL = process.env.VERCEL === '1';

// Use Vercel environment variable to determine the webhook address
const WEBHOOK_ADDRESS = (
	IS_VERCEL ? `https://${process.env.VERCEL_URL}` : process.env.WEBHOOK_ADDRESS
) as string;

export const addBot = protectedProcedure
	.input(
		z.object({
			token: z.string(),
		})
	)
	.mutation(async ({ input, ctx }) => {
		const { user } = ctx.session;
		const { token } = input;

		try {
			const bot = new Bot(token);

			const me = await bot.api.getMe();

			const webhookAddress = new URL(WEBHOOK_ADDRESS);
			webhookAddress.searchParams.append('botId', me.id.toString());
			await bot.api.setWebhook(webhookAddress.toString());

			// todo: error handling

			try {
				return await prisma.bot.create({
					data: {
						id: me.id.toString(),
						name: me.first_name,
						username: me.username,
						userId: user.id,
						botInfo: me as any,
						token,
					},
				});
			} catch (error) {
				console.error(error);
				return null;
			}
		} catch (e) {
			console.error(e);
			return null;
		}
	});

export const restartBot = protectedProcedure
	.input(
		z.object({
			botId: z.string(),
		})
	)
	.mutation(async ({ input }) => {
		const { botId } = input;
		const webhookAddress = new URL(WEBHOOK_ADDRESS);

		try {
			const botData = await prisma.bot.findUnique({
				where: {
					id: botId,
				},
			});

			if (!botData) {
				throw new Error('Bot not found');
			}

			const bot = new Bot(botData.token);

			await bot.api.deleteWebhook();

			webhookAddress.searchParams.append('botId', botId);
			await bot.api.setWebhook(webhookAddress.toString());

			return true;
		} catch (error) {
			console.error(error);
			return false;
		}
	});
