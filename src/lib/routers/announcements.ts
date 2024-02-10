import { protectedProcedure } from '~server/trpc';
import { z } from 'zod';
import { getBotInstance } from '~lib/bot';

export const createAnnouncement = protectedProcedure
	.input(
		z.object({
			text: z.string(),
			chatId: z.string(),
		})
	)
	.mutation(async ({ input }) => {
		const bot = await getBotInstance();

		try {
			await bot.telegram.sendMessage(input.chatId, input.text, {
				parse_mode: 'Markdown',
			});
		} catch (e) {
			console.error(e);
		}
	});
