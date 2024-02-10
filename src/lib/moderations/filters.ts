import { InputType } from '~lib/types';

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
