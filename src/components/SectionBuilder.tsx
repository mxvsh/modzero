import { ModerationSection } from '~lib/moderations/types';
import InputBuilder from './InputBuilder';

type FormBuilderProps = {
	section: ModerationSection;
};
function SectionBuilder({ section }: FormBuilderProps) {
	return (
		<>
			<div className='flex flex-col gap-6 p-4 bg-neutral-50 border rounded-xl'>
				<div className=''>
					<h2 className='font-semibold'>{section.title}</h2>
					<p className='text-xs text-gray-500'>{section.subTitle}</p>
				</div>

				<div className='flex flex-col space-y-2 flex-1'>
					{section.inputs.map((input) => (
						<InputBuilder key={input.label} input={input} />
					))}
				</div>
			</div>
		</>
	);
}

export { SectionBuilder };
