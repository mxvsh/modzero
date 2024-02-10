import { Checkbox } from '@nextui-org/react';
import React from 'react';

function ServiceMessage() {
	return (
		<div className='bg-neutral-50 border rounded-xl p-4'>
			<h1 className='font-semibold'>Service Message</h1>
			<div className='mt-4 flex flex-col gap-2'>
				<Checkbox>Delete service messages about new users</Checkbox>
				<Checkbox>Delete service messages about leaving users</Checkbox>
				<Checkbox>Delete service messages about pinned messages</Checkbox>
			</div>
		</div>
	);
}

export default ServiceMessage;
