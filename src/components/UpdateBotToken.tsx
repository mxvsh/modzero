'use client';

import React from 'react';
import { Button, Chip, Input } from '@nextui-org/react';
import { Bot } from '@prisma/client';
import { TbDeviceFloppy, TbRefresh } from 'react-icons/tb';
import { trpc } from '~lib/client';

type Props = {
	bot: Bot;
};
function UpdateBotToken({ bot }: Props) {
	const restartBot = trpc.restartBot.useMutation();

	return (
		<div className='p-4 border-1 rounded-lg space-y-4 bg-neutral-50'>
			<h1 className='text-lg font-bold'>Bot Configuration</h1>
			<div className='flex gap-2 items-center'>
				<Chip>
					<span>{bot.id}</span>
				</Chip>
				<Chip>
					<span>{bot.name}</span>
				</Chip>
			</div>
			<div className='space-y-2'>
				<Input
					placeholder='Update bot token'
					variant='bordered'
					defaultValue={bot.token}
				/>

				<Button color='primary' startContent={<TbDeviceFloppy />}>
					Save
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
			</div>
		</div>
	);
}

export default UpdateBotToken;
