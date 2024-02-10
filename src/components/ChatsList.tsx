'use client';

import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Chip,
	Input,
	Tab,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
	Tabs,
} from '@nextui-org/react';
import { TelegramChat } from '@prisma/client';
import Link from 'next/link';
import React from 'react';

type Props = {
	chats: TelegramChat[];
};
function ChatsList({ chats }: Props) {
	return (
		<div className='space-y-4 p-4'>
			<div className='flex items-center'>
				<Input
					placeholder='Search'
					variant='bordered'
					className='w-72'
					size='sm'
				/>
				<div className='flex-1' />
				<Tabs aria-label='Options'>
					<Tab key='all' title='All'></Tab>
					<Tab key='groups' title='Groups'></Tab>
					<Tab key='channels' title='Channels'></Tab>
				</Tabs>
			</div>

			<div className='space-y-2'>
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
