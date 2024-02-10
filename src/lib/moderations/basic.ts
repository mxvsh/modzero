import { ModerationSection } from './types';

export const BasicModeration: ModerationSection[] = [
	{
		title: 'Administrative',
		subTitle: 'Administrative settings for the chat',
		inputs: [
			{
				id: 'enable_admin_commands',
				type: 'checkbox',
				label: 'Enable admin commands',
				hint: 'This will allow admins to use commands like /kick, /ban, etc.',
			},
			{
				id: 'disable_chat_message',
				type: 'checkbox',
				label: 'Disable chat messages',
				hint: 'This will disable all chat messages.',
			},
		],
	},
	{
		title: 'Warning System',
		subTitle: 'Configure the warning system',
		inputs: [
			{
				id: 'enable_warning_system',
				type: 'checkbox',
				label: 'Enable warning system',
			},
			{
				id: 'warning_system_threshold',
				type: 'text',
				label: 'Warning threshold',
				hint: 'The amount of warnings a user can receive before being kicked or banned.',
				value: '3',
			},
		],
	},
];
