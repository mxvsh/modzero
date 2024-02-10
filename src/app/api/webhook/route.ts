import { Telegraf } from 'telegraf';
import { UserFromGetMe } from 'grammy/types';
import prisma from '~lib/prisma';
// import telegramBot from '~telegram/bot';

export async function POST(req: Request) {
	const url = new URL(req.url);
	const payload = await req.json();

	const botId = url.searchParams.get('botId');

	const botData = await prisma.bot.findUnique({
		where: {
			id: botId as string,
		},
	});

	console.log('botData', botData);

	if (!botData) {
		throw new Error('Bot not found');
	}

	const bot = new Telegraf(botData.token, {});

	// note: just for testing purpose
	bot.command('start', (ctx) => {
		ctx.reply('Hello!');
	});

	// bot.use(telegramBot);

	console.log('payload', payload);
	await bot.handleUpdate(payload);

	return new Response('ok');
}

export function GET() {
	return new Response('ok');
}
