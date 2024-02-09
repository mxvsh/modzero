'use client';

import { Input, Button } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { trpc } from '~lib/client';

function SetupPage() {
	const r = useRouter();
	const form = useForm();
	const addBot = trpc.addBot.useMutation();

	const handleSubmit = (data: any) => {
		addBot
			.mutateAsync(data)
			.then(() => {
				r.push('/d/chats');
			})
			.catch((err) => {
				if (err instanceof Error) {
					toast.error(err.message);
				}
			});
	};

	return (
		<main className='w-full h-screen flex flex-col items-center justify-center px-4'>
			<div className='max-w-sm w-full space-y-8'>
				<div className='text-center'>
					<Image
						alt='logo'
						src='/logo-dark.png'
						width='80'
						height='80'
						className='mx-auto rounded-3xl'
					/>
					<div className='mt-5 space-y-2'>
						<h3 className='text-2xl font-bold sm:text-3xl'>Setup your bot</h3>
						<p className=''>You can find bot token from @BotFather</p>
					</div>
				</div>
				<form className='space-y-4' onSubmit={form.handleSubmit(handleSubmit)}>
					<div>
						<label className='font-medium'>Token</label>
						<Input
							required
							placeholder='Enter bot token'
							variant='bordered'
							className='mt-2'
							{...form.register('token')}
						/>
					</div>
					<Button
						color='primary'
						type='submit'
						className='w-full'
						isLoading={addBot.isLoading}
					>
						Continue
					</Button>
				</form>
			</div>
		</main>
	);
}

export default SetupPage;
