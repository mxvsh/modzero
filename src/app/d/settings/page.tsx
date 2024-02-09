import React from 'react';
import { getServerSession } from 'next-auth/next';
import UpdateBotToken from '~components/UpdateBotToken';
import { authOptions } from '~lib/auth';
import { getUserBots } from '~lib/bot';

async function Settings() {
	const session = await getServerSession(authOptions);
	const bots = await getUserBots(session!.user.id);

	// read first bot
	const bot = bots[0];

	return (
		<>
			<div className='p-4 space-y-4 max-w-lg'>
				<UpdateBotToken bot={bot} />
			</div>
		</>
	);
}

export default Settings;
