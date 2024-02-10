import { Checkbox } from '@nextui-org/react';
import React from 'react';
import SectionCard from '~components/SectionCard';

function NewUserPolicies() {
	return (
		<SectionCard title='Policies' description='Apply policies to new users'>
			<Checkbox>Cannot send messages</Checkbox>
			<Checkbox>Cannot send medias</Checkbox>
			<Checkbox>Cannot send links</Checkbox>
			<Checkbox>Cannot send stickers</Checkbox>
			<Checkbox>Cannot send polls</Checkbox>
			<Checkbox>Cannot invite users</Checkbox>
		</SectionCard>
	);
}

export default NewUserPolicies;
