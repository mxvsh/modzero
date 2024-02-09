'use client';

import {
	Dropdown,
	DropdownTrigger,
	Avatar,
	DropdownMenu,
	DropdownItem,
} from '@nextui-org/react';
import { useSession } from 'next-auth/react';

export default function AvatarMenu() {
	const { data } = useSession();
	const { image, username } = data?.user || {};

	return (
		<Dropdown placement='bottom-end'>
			<DropdownTrigger>
				<Avatar
					isBordered
					as='button'
					className='transition-transform'
					src={`https://api.dicebear.com/7.x/identicon/svg?seed=${username}`}
				/>
			</DropdownTrigger>
			<DropdownMenu aria-label='Profile Actions' variant='flat'>
				<DropdownItem key='profile' className='h-14 gap-2'>
					<p className='font-semibold'>Signed in as</p>
					<p className='font-semibold'>{username}</p>
				</DropdownItem>
				<DropdownItem key='settings'>My Settings</DropdownItem>
				<DropdownItem key='team_settings'>Team Settings</DropdownItem>
				<DropdownItem key='analytics'>Analytics</DropdownItem>
				<DropdownItem key='system'>System</DropdownItem>
				<DropdownItem key='configurations'>Configurations</DropdownItem>
				<DropdownItem key='help_and_feedback'>Help & Feedback</DropdownItem>
				<DropdownItem key='logout' color='danger'>
					Log Out
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
}
