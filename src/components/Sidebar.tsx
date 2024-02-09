'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { TbHome2, TbSettings, TbMessage2 } from 'react-icons/tb';

const options = [
	{
		label: 'Chats',
		icon: TbHome2,
		path: '/d/chats',
		regex: /^\/d\/chats/,
	},
	{
		label: 'Settings',
		icon: TbSettings,
		path: '/d/settings',
		regex: /^\/d\/settings/,
	},
];

function MainSidebar() {
	const pathname = usePathname();

	return (
		<div className='h-full bg-background'>
			<div className='p-4'>
				<Image
					alt='logo'
					src='/logo-dark.png'
					width='80'
					height='80'
					className='rounded-3xl'
				/>
			</div>

			<div className='mt-4 space-y-2 px-4'>
				{options.map((option) => {
					const Icon = option.icon;
					const isActive = option.regex.test(pathname);

					return (
						<div key={option.label}>
							<Link href={option.path}>
								<div
									className={`flex items-center space-x-2 border-2 p-4 text-gray-600 rounded-xl transition-all duration-300 ${
										isActive ? 'bg-gray-100' : 'border-transparent'
									}`}
								>
									<div>
										<Icon size={24} />
									</div>
									<div className=''>{option.label}</div>
								</div>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default MainSidebar;
