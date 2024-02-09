import React from 'react';
import UpdateBotToken from '~components/UpdateBotToken';

function Settings() {
	return (
		<>
			<div className='p-4 grid grid-cols-3 gap-4'>
				<UpdateBotToken />
			</div>
		</>
	);
}

export default Settings;
