'use client';

import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Input, Button } from '@nextui-org/react';
import { useState } from 'react';

function LoginPage() {
	const form = useForm();
	const [loading, setLoading] = useState(false);

	function handleLogin(data: Record<string, string>) {
		setLoading(true);
		signIn('credentials', {
			username: data.username,
			password: data.password,
			redirect: false,
		}).then((res) => {
			if (!res?.ok) {
				toast.error('Invalid username or password');
				setLoading(false);
			} else {
				toast.success('Login successful');

				setTimeout(() => {
					window.location.href = '/d/chats';
				}, 1000);
			}
		});
	}

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
						<h3 className='text-2xl font-bold sm:text-3xl'>
							Log in to your account
						</h3>
						<p className=''>Please log in to continue.</p>
					</div>
				</div>
				<form className='space-y-4' onSubmit={form.handleSubmit(handleLogin)}>
					<div>
						<label className='font-medium'>Username</label>
						<Input
							required
							className='w-full input input-bordered mt-2'
							placeholder='Your username'
							{...form.register('username')}
						/>
					</div>
					<div>
						<label className='font-medium'>Password</label>
						<Input
							type='password'
							className='w-full input input-bordered mt-2'
							placeholder='Your password'
							{...form.register('password')}
						/>
					</div>
					<Button
						color='primary'
						type='submit'
						className='w-full'
						isLoading={loading}
					>
						Login
					</Button>

					<Button
						as={Link}
						href='/signup'
						className='w-full'
						variant='bordered'
					>
						Create an account
					</Button>
				</form>
			</div>
		</main>
	);
}

export default LoginPage;
