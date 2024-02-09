import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col justify-center items-center p-12'>
			<Image
				className='rounded-3xl'
				src='/logo-dark.png'
				alt='Next.js Logo'
				width={80}
				height={80}
				priority
			/>

			<h1 className='mt-4 text-4xl font-bold text-center'>modzero</h1>

			<div className='mt-4'>
				<Button as={Link} href='/login' variant='bordered'>
					Continue
				</Button>
			</div>
		</main>
	);
}
