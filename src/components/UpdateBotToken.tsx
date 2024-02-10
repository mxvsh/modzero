'use client';

import React from 'react';
import {
	Avatar,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Chip,
	Input,
} from '@nextui-org/react';
import { Bot } from '@prisma/client';
import { TbDeviceFloppy, TbRefresh } from 'react-icons/tb';
import { trpc } from '~lib/client';

type Props = {
	bot: Bot;
};
function UpdateBotToken({ bot }: Props) {
	const restartBot = trpc.restartBot.useMutation();

	return (
		<Card>
			<CardHeader>
				<div className='flex items-center gap-4'>
					<Avatar
						size='lg'
						src={`https://api.dicebear.com/7.x/initials/svg?seed=${bot.name}`}
					/>
					<div>
						<h1 className='text-lg font-bold'>{bot.name}</h1>
						<p className='text-sm text-gray-500'>{bot.id}</p>
					</div>
				</div>
			</CardHeader>
			<CardBody className='space-y-4'>
				<Input
					placeholder='Update bot token'
					variant='bordered'
					defaultValue={bot.token}
				/>
			</CardBody>
			<CardFooter>
				<Button color='primary' startContent={<TbDeviceFloppy />}>
					Update Token
				</Button>
				<Button
					color='primary'
					variant='bordered'
					className='ml-2'
					startContent={<TbRefresh />}
					isLoading={restartBot.isLoading}
					onClick={() => {
						restartBot.mutate({ botId: bot.id });
					}}
				>
					Restart
				</Button>
			</CardFooter>
		</Card>
	);
}

export default UpdateBotToken;
