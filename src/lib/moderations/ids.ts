import { InputType } from '~lib/types';

export const ModerationIDs = [
	// Basic
	'disable_chat_message',
	'enable_admin_commands',
	'enable_warning_system',
	'warning_system_threshold',

	// New Users
	'welcome_message',
	'welcome_message_buttons',

	// Policies
	'new_user_disable_message',
	'new_user_disable_media',
	'new_user_disable_link',
	'new_user_disable_sticker',
	'new_user_disable_invite',

	// Filters
	'delete_service_message_new_user',
	'delete_service_message_leaving_user',
	'delete_service_message_pinned_message',
] as const;
