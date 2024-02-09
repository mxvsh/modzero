import React from 'react';
import { Button, Input } from '@nextui-org/react';

function UpdateBotToken() {
	return (
		<div className='p-4 border-1 rounded-lg space-y-4 bg-neutral-50'>
			<h1 className='text-lg font-bold'>Bot token</h1>
			<div className='space-y-2'>
				<Input placeholder='Enter bot token' variant='bordered' />
				<Button color='primary'>Save</Button>
			</div>
		</div>
	);
}

export default UpdateBotToken;
