'use client';

import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { Input, Button } from '@nextui-org/react';

import { toast } from 'sonner';
import { useState } from 'react';

function SignupPage() {
	const form = useForm();
	const [loading, setLoading] = useState(false);

	function handleSignup(data: Record<string, string>) {
		setLoading(true);
		fetch('/api/auth/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then(async (res) => {
			if (res.status === 200) {
				return signIn('credentials', { callbackUrl: '/bots' });
			} else {
				toast.error(await res.text());
				setLoading(false);
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
							Create an account
						</h3>
						<p>Please create an account to continue.</p>
					</div>
				</div>
				<form className='space-y-4' onSubmit={form.handleSubmit(handleSignup)}>
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
						Submit
					</Button>

					<Button as={Link} href='/login' className='w-full'>
						Already have an account
					</Button>
				</form>
			</div>
		</main>
	);
}

export default SignupPage;
