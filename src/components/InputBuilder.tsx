import { Checkbox, Input } from '@nextui-org/react';
import { TipTap } from './TipTap';
import { ModerationInputType } from '~lib/moderations/all';
import { KeyboardButtonBuilder } from './KeyboardButton';

type InputBuilderProps = {
	input: ModerationInputType;
};
const InputBuilder = ({ input }: InputBuilderProps) => {
	switch (input.type) {
		case 'checkbox': {
			return (
				<div className='space-y-1'>
					<Checkbox>{input.label}</Checkbox>
					{input.hint && <p className='text-xs text-gray-500'>{input.hint}</p>}
				</div>
			);
		}

		case 'text': {
			return (
				<div className='space-y-1'>
					<Input
						label={input.label}
						variant='bordered'
						classNames={{
							innerWrapper: 'bg-white',
							inputWrapper: 'bg-white',
						}}
						size='sm'
					/>
					{input.hint && <p className='text-xs text-gray-500'>{input.hint}</p>}
				</div>
			);
		}

		case 'markdown': {
			return (
				<div className='space-y-1 w-full bg-white'>
					<TipTap hint={input.hint} />
				</div>
			);
		}

		case 'url_buttons': {
			return (
				<div className='space-y-1 w-full bg-white'>
					<KeyboardButtonBuilder />
				</div>
			);
		}

		default: {
			return <div>Unknown input type</div>;
		}
	}
};

export default InputBuilder;
