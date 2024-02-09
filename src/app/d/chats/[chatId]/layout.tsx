import React from 'react';
import UpdateAppTitle from '~lib/helper/UpdateAppTitle';

function ChatLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			{children}
			<UpdateAppTitle title='ModZero' />
		</>
	);
}

export default ChatLayout;
