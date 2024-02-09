'use client';

import { useMemo } from 'react';
import { useParams, usePathname } from 'next/navigation';
import {
	TbHammer,
	TbHome2,
	TbSettings,
	TbSettings2,
	TbSpeakerphone,
} from 'react-icons/tb';
import { IconType } from 'react-icons/lib';
import Link from 'next/link';

type SidebarItemProps = {
	label: string;
	icon: IconType;
	path: string;
	regex: RegExp;

	child?: SidebarItemProps[];
	childRegex?: RegExp;
};

const AppSidebarItems: SidebarItemProps[] = [
	{
		label: 'Chats',
		icon: TbHome2,
		path: '/d/chats',
		regex: /^\/d\/chats/,
		childRegex: /^\/d\/chats\/-?\d+/,
		child: [
			{
				label: 'Home',
				icon: TbHome2,
				path: '/d/chats/[chatId]',
				regex: /^\/d\/chats\/-?\d+$/,
			},
			{
				label: 'Announcements',
				icon: TbSpeakerphone,
				path: '/d/chats/[chatId]/announcements',
				regex: /^\/d\/chats\/-?\d+\/announcements$/,
			},
			{
				label: 'Moderation',
				icon: TbHammer,
				path: '/d/chats/[chatId]/moderation',
				regex: /^\/d\/chats\/-?\d+\/moderation$/,
			},
			{
				label: 'Settings',
				icon: TbSettings2,
				path: '/d/chats/[chatId]/settings',
				regex: /^\/d\/chats\/-?\d+\/settings$/,
			},
		],
	},
	{
		label: 'Settings',
		icon: TbSettings,
		path: '/d/settings',
		regex: /^\/d\/settings/,
	},
];

export function RootSidebar() {
	const params = useParams();
	const pathname = usePathname();

	const items = useMemo(() => {
		const activeItem = AppSidebarItems.find((item) =>
			item.regex.test(pathname)
		);
		if (!activeItem) return AppSidebarItems;

		if (activeItem.childRegex?.test(pathname)) {
			const activeChild = activeItem.child?.find((item) =>
				item.regex.test(pathname)
			);
			return activeItem.child ?? [];
		}

		return AppSidebarItems;
	}, [pathname]);

	return (
		<div className='p-4'>
			{items.map(({ label, icon, regex, path }) => {
				const Icon = icon;
				const isActive = regex.test(pathname);

				path = path.replace('[chatId]', params.chatId as string);

				return (
					<Link key={label} href={path}>
						<div
							className={`flex items-center space-x-2 border-2 p-4 text-gray-600 rounded-xl transition-all duration-300 ${
								isActive ? 'bg-gray-100' : 'border-transparent'
							}`}
						>
							<div>
								<Icon size={24} />
							</div>
							<div className=''>{label}</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
}

export function AppSidebar() {
	return (
		<div className='hidden md:block w-72 h-full'>
			<RootSidebar />
		</div>
	);
}
