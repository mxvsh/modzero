'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { ArrowLeftIcon, BookIcon, MenuIcon, UsersIcon } from 'lucide-react';
import { Button, Spinner, useDisclosure } from '@nextui-org/react';
import Link from 'next/link';
import AvatarMenu from './AvatarMenu';
import { useAppStore } from '~lib/store';
import logo from '~assets/logo.svg';
import AppDrawer from './AppDrawer';

export function AppBar() {
	const params = useParams();
	const appStore = useAppStore();
	const isRoot = Object.keys(params).length === 0;
	const drawer = useDisclosure();

	return (
		<div className='border-b-1'>
			<div className='max-w-6xl m-auto'>
				<AppDrawer disclosure={drawer} />

				<div className='flex items-center px-4 gap-4 h-20'>
					<Button
						isIconOnly
						disableRipple
						variant='light'
						size='lg'
						className='md:hidden'
						onClick={drawer.onOpenChange}
					>
						<MenuIcon />
					</Button>

					<Image
						className={`pointer-events-none rounded-2xl ${
							!isRoot ? 'hidden' : 'md:block'
						}`}
						alt='logo'
						src={logo}
						height={60}
					/>

					{!isRoot && (
						<div className='hidden md:flex items-center gap-6'>
							<Link href='/d/chats'>
								<ArrowLeftIcon size={30} />
							</Link>
							{appStore.appTitle ? (
								<h1 className='font-semibold text-2xl'>{appStore.appTitle}</h1>
							) : (
								<Spinner />
							)}
						</div>
					)}

					<div className='flex-1' />
					<div className='gap-2 hidden md:flex'>
						<>
							<Button
								disableRipple
								variant='light'
								startContent={<BookIcon size={16} />}
							>
								Docs
							</Button>
							<Button
								disableRipple
								variant='light'
								startContent={<UsersIcon size={16} />}
							>
								Support
							</Button>
						</>
					</div>
					<AvatarMenu />
				</div>
			</div>
		</div>
	);
}
