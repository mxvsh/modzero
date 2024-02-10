import React from 'react';

function PageTitle({
	title,
	extra,
}: {
	title: string;
	extra?: React.ReactNode;
}) {
	return (
		<div className='flex items-center p-6 border-b h-20 sticky top-0 z-40 bg-white'>
			<h1 className='text-xl font-semibold'>{title}</h1>
			<div className='flex-grow' />
			{extra}
		</div>
	);
}

export default PageTitle;
