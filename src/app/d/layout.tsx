import React from 'react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { AppBar } from '~components/AppBar';
import { AppSidebar } from '~components/AppSidebar';
import { authOptions } from '~lib/auth';
import { getUserBots } from '~lib/bot';

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
		<div className='flex flex-col h-screen'>
			<AppBar />

			<div className='flex-1 h-full flex'>
				<div className='border-r-1'>
					<AppSidebar />
				</div>

				<div className='flex-1 h-full'>{children}</div>
			</div>
		</div>
	);
}

export default ChatsLayout;
