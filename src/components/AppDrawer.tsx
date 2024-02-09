import { Button, UseDisclosureProps } from '@nextui-org/react';
import React from 'react';
import { RootSidebar } from './AppSidebar';
import { TbX } from 'react-icons/tb';

type Props = {
	disclosure: UseDisclosureProps;
};
function AppDrawer({ disclosure }: Props) {
	return (
		<div
			className={`fixed top-0 left-0 z-40 h-screen overflow-y-auto transition-transform bg-white border-r w-72 dark:bg-gray-800 ${
				disclosure.isOpen ? 'translate-x-0' : '-translate-x-full'
			}`}
			// tabIndex={-1}
			aria-labelledby='drawer-label'
		>
			<div className='flex justify-end'>
				<Button
					isIconOnly
					className='right-2 top-2'
					variant='bordered'
					onClick={disclosure.onClose}
				>
					<TbX />
				</Button>
			</div>
			<RootSidebar />
		</div>
	);
}

export default AppDrawer;
