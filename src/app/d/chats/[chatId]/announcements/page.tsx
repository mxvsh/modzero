import React from 'react';
import { AnnouncementCreate } from '~components/AnnouncementCreate';
import PageTitle from '~components/PageTitle';

function Annoucements({
	params,
}: {
	params: {
		chatId: string;
	};
}) {
	return (
		<div>
			<PageTitle title='Annoucements' />
			<AnnouncementCreate chatId={params.chatId} />
		</div>
	);
}

export default Annoucements;
