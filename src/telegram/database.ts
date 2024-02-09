import { Composer } from 'grammy/web';
import { ChatMemberAdministrator, ChatMemberOwner } from 'grammy/types';
import prisma from '~lib/prisma';

const databaseComposer = new Composer();

function convertAdminsToJSON(
	input: (ChatMemberOwner | ChatMemberAdministrator)[]
) {
	const final: Record<number, ChatMemberOwner | ChatMemberAdministrator> = {};

	for (const admin of input) {
		if (admin.user.id) {
			final[admin.user.id] = admin;
		}
	}

	return final;
}

function handleCreateChat(chat: any) {
	return prisma.telegramChat.create({
		data: chat,
	});
}

databaseComposer.use(async (ctx, next) => {
	next();

	const chat = ctx.chat;

	if (ctx.myChatMember) {
		const { new_chat_member } = ctx.myChatMember;

		// Only run if the bot is added to a group/channel
		if (new_chat_member.user.id === ctx.me.id) {
			if (new_chat_member.status === 'administrator') {
				if (chat) {
					const chatExist = await prisma.telegramChat.findUnique({
						where: {
							id: chat.id.toString(),
						},
					});

					if (chatExist) {
						return;
					}

					const toalMembers = await ctx.getChatMemberCount();

					if (
						chat.type === 'supergroup' ||
						chat.type === 'group' ||
						chat.type === 'channel'
					) {
						const admins = await ctx.getChatAdministrators();
						await prisma.telegramChat.create({
							data: {
								id: chat.id.toString(),
								type: chat.type,
								title: chat.title,
								admins: convertAdminsToJSON(admins) as never,
								totalMembers: toalMembers,
							},
						});
					}
				}
			}
			return;
		}
	}
});

databaseComposer.on('message', async (ctx, next) => {
	next();

	const user = ctx.from;
	const chat = ctx.chat;

	if (!chat) return;

	try {
		if (user) {
			const userExist = await prisma.telegramUser.findFirst({
				where: {
					id: user.id.toString(),
				},
			});

			if (!userExist) {
				await prisma.telegramUser.create({
					data: {
						id: user.id.toString(),
						firstName: user.first_name,
						lastName: user.last_name,
						username: user.username,
					},
				});
			}

			const totalChats = await prisma.telegramChat.count({
				where: {
					id: chat.id.toString(),
				},
			});

			if (totalChats === 0) {
				const toalMembers = await ctx.getChatMemberCount();

				if (chat.type === 'supergroup' || chat.type === 'group') {
					const admins = await ctx.getChatAdministrators();
					await prisma.telegramChat.create({
						data: {
							id: chat.id.toString(),
							type: chat.type,
							title: chat.title,
							admins: convertAdminsToJSON(admins) as never,
							totalMembers: toalMembers,
						},
					});
				}
			}

			const userChatExist = await prisma.telegramUserChat.findFirst({
				where: {
					chatId: chat.id.toString(),
					userId: user.id.toString(),
				},
			});

			if (!userChatExist) {
				await prisma.telegramUserChat.create({
					data: {
						chatId: chat.id.toString(),
						userId: user.id.toString(),
					},
				});
			}
		}
	} catch (e) {
		console.error(e);
	}
});

export default databaseComposer;
