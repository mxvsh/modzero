import { Bot } from 'grammy/web';
import prisma from './prisma';

export function getUserBots(userId: string) {
	return prisma.bot.findMany({
		where: {
			userId,
		},
	});
}

export async function getBotInstance() {
	const botData = await prisma.bot.findFirst();
	if (!botData) {
		throw new Error('Bot not found');
	}

	return new Bot(botData.token);
}
