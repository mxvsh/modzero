export type InputType<T = string> = {
	id: T;
	type: 'text' | 'checkbox' | 'select' | 'markdown';
	label: string;
	hint?: string;
	value?: string | boolean;
};
