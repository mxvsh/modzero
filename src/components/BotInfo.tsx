import React from 'react';
import { Avatar, Card, CardBody, CardHeader, Chip } from '@nextui-org/react';
import { Bot } from '@prisma/client';

function BotInfo({ bot }: { bot: Bot }) {
	return (
		<Card>
			<CardHeader className='flex-col items-start'>
				<Avatar
					size='lg'
					src={`https://api.dicebear.com/7.x/initials/svg?seed=${bot.name}`}
				/>
				<h1 className='mt-2 text-lg font-bold'>{bot.name}</h1>
				<p className='text-sm text-gray-500'>{bot.id}</p>
			</CardHeader>
			<CardBody>
				<Chip color='primary'>@{bot.username}</Chip>
			</CardBody>
		</Card>
	);
}

export default BotInfo;
