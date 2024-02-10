import { Section } from '~lib/moderations/all';
import InputBuilder from './InputBuilder';

type FormBuilderProps = {
	section: Section;
};
function SectionBuilder({ section }: FormBuilderProps) {
	return (
		<>
			<div className='flex gap-6 p-4 bg-neutral-50 border rounded-xl'>
				<div className='w-[200px]'>
					<h2 className='font-semibold'>{section.title}</h2>
					<p className='text-xs text-gray-500'>{section.subTitle}</p>
				</div>

				<div className='flex flex-col space-y-4 flex-1'>
					{section.inputs.map((input) => (
						<InputBuilder key={input.label} input={input} />
					))}
				</div>
			</div>
		</>
	);
}

export { SectionBuilder };
