import React from 'react';
import ChatsList from '~components/ChatsList';
import prisma from '~lib/prisma';

async function Chats() {
	const chats = await prisma.telegramChat.findMany();

	return (
		<>
			<ChatsList chats={chats} />
		</>
	);
}

export default Chats;
