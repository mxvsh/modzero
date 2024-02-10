import React from 'react';

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { AppBar } from '~components/AppBar';
import { AppSidebar } from '~components/AppSidebar';
import { authOptions } from '~lib/auth';
import { getUserBots } from '~lib/bot';
import ProgressBar from '~components/ProgressBar';

async function ChatsLayout({ children }: { children: React.ReactNode }) {
	const session = await getServerSession(authOptions);

	if (!session) {
		redirect('/login');
	}

	const bots = await getUserBots(session.user.id);

	if (bots.length === 0) {
		redirect('/setup');
	}

	return (
		<div className='h-screen flex flex-col'>
			<AppBar />

			<ProgressBar />

			<div className='flex h-full w-[80rem] mx-auto overflow-hidden'>
				<div className='w-72 border-r pr-4 pt-4'>
					<AppSidebar />
				</div>
				<div className='flex-1 overflow-y-auto'>{children}</div>
				<div className='w-72 border-l'></div>
			</div>
		</div>
	);
}

export default ChatsLayout;
