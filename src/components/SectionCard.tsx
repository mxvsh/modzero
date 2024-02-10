import React from 'react';

type Props = {
	title: string;
	description: string;
	children: React.ReactNode;
};
function SectionCard({ title, description, children }: Props) {
	return (
		<div className='bg-neutral-50 border rounded-xl p-4'>
			<h1 className='font-semibold'>{title}</h1>
			<p className='text-sm text-gray-500'>{description}</p>

			<div className='mt-4 flex flex-col gap-2'>{children}</div>
		</div>
	);
}

export default SectionCard;
