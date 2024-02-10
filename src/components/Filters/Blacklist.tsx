import { Button, Chip, Input } from '@nextui-org/react';
import { useState } from 'react';
import { LuX } from 'react-icons/lu';
import SectionCard from '~components/SectionCard';

export function BlacklistWords() {
	const [word, setWord] = useState<string>('');
	const [words, setWords] = useState<string[]>([
		'blacklisted',
		'words',
		'here',
	]);

	return (
		<SectionCard
			title='Blacklist Words'
			description='Add words to the blacklist to filter messages'
		>
			<Input
				label='Add a word'
				variant='bordered'
				size='sm'
				value={word}
				onChange={(e) => setWord(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						e.preventDefault();
						setWords([...words, word]);
						setWord('');
					}
				}}
			/>

			<div className='flex items-center gap-2 flex-wrap'>
				{words.map((word, index) => (
					<Chip
						key={index}
						color='danger'
						endContent={
							<LuX
								size={14}
								className='mx-1 cursor-pointer'
								onClick={() => {
									const newWords = words.filter((_, i) => i !== index);
									setWords(newWords);
								}}
							/>
						}
					>
						{word}
					</Chip>
				))}
			</div>
		</SectionCard>
	);
}
