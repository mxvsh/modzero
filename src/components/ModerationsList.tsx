'use client';

import { Tab, Tabs } from '@nextui-org/react';
import { useParams } from 'next/navigation';
import React from 'react';
import { AllModerations } from '~lib/moderations/all';
import { SectionBuilder } from './SectionBuilder';

function ModerationsList() {
	const params = useParams();

	return (
		<div className=''>
			<Tabs
				aria-label='Options'
				variant='underlined'
				fullWidth
				classNames={{
					tabList:
						'gap-6 w-full relative rounded-none p-0 border-b border-divider',
					tab: 'max-w-fit px-0 h-12',
					tabContent: 'w-full p-4',
				}}
			>
				<Tab key='basic' title='Basic'>
					<div className='space-y-6 p-4'>
						{AllModerations.basic.map((section) => (
							<SectionBuilder key={section.title} section={section} />
						))}
					</div>
				</Tab>
				<Tab key='new-users' title='New Users'>
					<div className='space-y-6 p-4'>
						{AllModerations.newUsers.map((section) => (
							<SectionBuilder key={section.title} section={section} />
						))}
					</div>
				</Tab>
				<Tab key='anti-spam' title='Anti-Spam'></Tab>
				<Tab key='filters' title='Filters'></Tab>
				<Tab key='workflows' title='Workflows'></Tab>
			</Tabs>
		</div>
	);
}

export default ModerationsList;
