import React from 'react';
import ChatsList from '~components/ChatsList';
import PageTitle from '~components/PageTitle';
import prisma from '~lib/prisma';

async function Chats() {
	const chats = await prisma.telegramChat.findMany();

	return (
		<>
			<PageTitle title='Chats' />
			<ChatsList chats={chats} />
		</>
	);
}

export default Chats;
