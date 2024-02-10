import { InputType } from '~lib/types';

enum Types {
	Basic = 'basic',
	NewUsers = 'newUsers',
}

const inputIds = [
	// Basic
	'disable_chat_message',
	'enable_admin_commands',
	'enable_warning_system',
	'warning_system_threshold',

	// New Users
	'welcome_message',
	'welcome_message_buttons',
] as const;

export type ModerationInputType = InputType<(typeof inputIds)[number]>;

export type Section = {
	title: string;
	subTitle: string;
	inputs: ModerationInputType[];
};

export const AllModerations: Record<Types, Section[]> = {
	basic: [
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
	],
	newUsers: [
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
	],
};
