import { InputType } from '~lib/types';
import { ModerationIDs } from './ids';

export type ModerationInputType = InputType<(typeof ModerationIDs)[number]>;

export type ModerationSection = {
	title: string;
	subTitle: string;
	inputs: ModerationInputType[];
};
