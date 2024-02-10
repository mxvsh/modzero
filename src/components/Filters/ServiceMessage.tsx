import { Checkbox } from '@nextui-org/react';
import React from 'react';
import SectionCard from '~components/SectionCard';

function ServiceMessage() {
	return (
		<SectionCard
			title='Service Messages'
			description='Select the service messages you want to filter'
		>
			<Checkbox>Delete service messages about new users</Checkbox>
			<Checkbox>Delete service messages about leaving users</Checkbox>
			<Checkbox>Delete service messages about pinned messages</Checkbox>
		</SectionCard>
	);
}

export default ServiceMessage;
