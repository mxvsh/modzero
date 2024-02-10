export type InputType<T = string> = {
	id: T;
	type: 'text' | 'checkbox' | 'select' | 'markdown' | 'url_buttons';
	label?: string;
	hint?: string;
	value?: string | boolean;
};
