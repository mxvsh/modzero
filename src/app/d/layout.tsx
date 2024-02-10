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
		<div className=''>
			<div className='sticky top-0 bg-white z-40'>
				<AppBar />
			</div>

			<div className='z-10 max-w-6xl m-auto'>
				<div className='h-96 flex-1 flex'>
					<div className='border-r-1'>
						<AppSidebar />
					</div>

					<div className='flex-1'>{children}</div>

					<div className='w-72 border-l' />
				</div>
			</div>
		</div>
	);
}

export default ChatsLayout;
