'use client';

import { Tab, Tabs } from '@nextui-org/react';
import React from 'react';
import { SectionBuilder } from './SectionBuilder';
import FilterMessageType from './Filters/MessageType';
import { BlacklistWords } from './Filters/Blacklist';
import { BasicModeration } from '~lib/moderations/basic';
import { NewUserModerations } from '~lib/moderations/new-users';
import { FilterModerations } from '~lib/moderations/filters';

function ModerationsList() {
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
						{BasicModeration.map((section) => (
							<SectionBuilder key={section.title} section={section} />
						))}
					</div>
				</Tab>
				<Tab key='new-users' title='New Users'>
					<div className='space-y-6 p-4'>
						{NewUserModerations.map((section) => (
							<SectionBuilder key={section.title} section={section} />
						))}
					</div>
				</Tab>
				<Tab key='filters' title='Filters'>
					<div className='space-y-6 p-4'>
						<FilterMessageType />
						{FilterModerations.map((section) => (
							<SectionBuilder key={section.title} section={section} />
						))}
						<BlacklistWords />
					</div>
				</Tab>
				<Tab key='anti-spam' title='Anti-Spam'></Tab>
				<Tab key='workflows' title='Workflows'></Tab>
			</Tabs>
		</div>
	);
}

export default ModerationsList;
