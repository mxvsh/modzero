import { InputType } from '~lib/types';
import { ModerationSection } from './types';

export enum MessageType {
	Link = 'Link',
	Command = 'Command',
	File = 'File',
	Sticker = 'Sticker',
	Mention = 'Mention',
	Games = 'Games',
	VoiceMessage = 'Voice Message',
	VideoMessage = 'Video Message',
	AudioMessage = 'Audio Message',
	PhotoMessage = 'Photo Message',
	GIFMessage = 'GIF Message',
	AnimatedDice = 'Animated Dice',
	CustomEmoji = 'Custom Emoji',
	Stories = 'Stories',
}

export enum MessageFilter {
	Allow = 'Allow',
	Disallow = 'Disallow',
}

export const ExceptionInputs: Partial<Record<MessageType, InputType[]>> = {
	Link: [
		{
			id: 'filter_link_exception',
			type: 'text',
			label: 'Exception URLs',
		},
		{
			id: 'filter_link_warn_on_violation',
			type: 'checkbox',
			label: 'Warn on violation',
		},
	],
};

export const FilterModerations: ModerationSection[] = [
	{
		title: 'Service Messages',
		subTitle: 'Select the service messages you want to filter',
		inputs: [
			{
				id: 'delete_service_message_new_user',
				type: 'checkbox',
				label: 'Delete service messages about new users',
			},
			{
				id: 'delete_service_message_leaving_user',
				type: 'checkbox',
				label: 'Delete service messages about leaving users',
			},
			{
				id: 'delete_service_message_pinned_message',
				type: 'checkbox',
				label: 'Delete service messages about pinned messages',
			},
		],
	},
];
