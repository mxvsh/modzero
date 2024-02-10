import React from 'react';
import ModerationsList from '~components/ModerationsList';
import PageTitle from '~components/PageTitle';

function Moderations() {
	return (
		<div>
			<PageTitle title='Moderations' />
			<ModerationsList />
		</div>
	);
}

export default Moderations;
