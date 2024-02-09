import React from 'react';
import { redirect } from 'next/navigation';
import UpdateAppTitle from '~lib/helpers/UpdateAppTitle';
import prisma from '~lib/prisma';

async function ChatLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: {
		chatId: string;
	};
}) {
	const chatData = await prisma.telegramChat.findUnique({
		where: {
			id: params.chatId,
		},
	});

	if (!chatData) {
		redirect('/d/chats');
	}

	return (
		<>
			{children}
			<UpdateAppTitle title={chatData.title} />
		</>
	);
}

export default ChatLayout;
