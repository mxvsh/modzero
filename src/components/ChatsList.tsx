import { Button, Card, CardBody, CardHeader, Chip } from '@nextui-org/react';
import { TelegramChat } from '@prisma/client';
import Link from 'next/link';
import React from 'react';

type Props = {
	chats: TelegramChat[];
};
function ChatsList({ chats }: Props) {
	return (
		<div className='space-y-4 p-4'>
			<p className='text-sm text-gray-500'>
				Here are the chats you have with the bot
			</p>

			<div className='grid grid-cols-1 lg:grid-cols-3 '>
				{chats.map((chat) => {
					return (
						<Card key={chat.id}>
							<CardBody className='space-y-3'>
								<h1 className='text-xl font-bold'>{chat.title}</h1>

								<div className='flex items-center gap-2'>
									<Chip variant='bordered' size='sm'>
										{chat.type}
									</Chip>
									<Chip variant='bordered' size='sm'>
										{chat.id}
									</Chip>
								</div>
								<div className='flex items-center gap-2'>
									<Button
										as={Link}
										href={`/d/chats/${chat.id}`}
										color='primary'
									>
										Manage
									</Button>
									<Button variant='bordered'>Delete</Button>
								</div>
							</CardBody>
						</Card>
					);
				})}
			</div>
		</div>
	);
}

export default ChatsList;
