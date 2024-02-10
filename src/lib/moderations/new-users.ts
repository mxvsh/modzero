import { ModerationSection } from './types';

export const NewUserModerations: ModerationSection[] = [
	{
		title: 'Welcome Message',
		subTitle: 'Configure the welcome message and setup keyboard buttons',
		inputs: [
			{
				id: 'welcome_message',
				type: 'markdown',
				label: 'Welcome message',
				hint: 'The message that will be sent to new users when they join.',
			},
			{
				id: 'welcome_message_buttons',
				type: 'url_buttons',
			},
		],
	},
	{
		title: 'Policies',
		subTitle: 'Apply policies to new users',
		inputs: [
			{
				id: 'new_user_disable_message',
				type: 'checkbox',
				label: 'Disable message',
			},
			{
				id: 'new_user_disable_media',
				type: 'checkbox',
				label: 'Disable media',
			},
			{
				id: 'new_user_disable_link',
				type: 'checkbox',
				label: 'Disable link',
			},
			{
				id: 'new_user_disable_sticker',
				type: 'checkbox',
				label: 'Disable sticker',
			},
			{
				id: 'new_user_disable_invite',
				type: 'checkbox',
				label: 'Disable invite',
			},
		],
	},
];
