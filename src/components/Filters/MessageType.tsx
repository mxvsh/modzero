import {
	Button,
	Checkbox,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure,
} from '@nextui-org/react';
import { ExceptionInputs, MessageType } from '~lib/moderations/filters';
import { LuCog } from 'react-icons/lu';
import { useState } from 'react';
import { InputType } from '~lib/types';
import InputBuilder from '~components/InputBuilder';
import SectionCard from '~components/SectionCard';

function FilterMessageType() {
	const modal = useDisclosure();
	const [inputs, setInputs] = useState<InputType[] | null>(null);

	return (
		<SectionCard
			title='Message Type'
			description='	Select the message types you want to filter'
		>
			<>
				{Object.entries(MessageType).map(([, value]) => {
					const exceptionInputs = ExceptionInputs[value];
					return (
						<div key={value} className='flex items-center gap-4'>
							<h2>{value}</h2>
							<div className='flex-1' />

							{exceptionInputs && (
								<Button
									disableRipple
									color='primary'
									size='sm'
									isIconOnly
									onClick={() => {
										setInputs(exceptionInputs);
										modal.onOpenChange();
									}}
								>
									<LuCog size={18} />
								</Button>
							)}
							<Checkbox />
						</div>
					);
				})}

				<Modal isOpen={modal.isOpen} onOpenChange={modal.onOpenChange}>
					<ModalContent>
						{(onClose) => (
							<>
								<ModalHeader className='flex flex-col gap-1'>
									Exception Inputs
								</ModalHeader>
								<ModalBody>
									{inputs?.map((input) => (
										<InputBuilder key={input.label} input={input} />
									))}
								</ModalBody>
								<ModalFooter>
									<Button color='danger' variant='light' onPress={onClose}>
										Close
									</Button>
									<Button color='primary' onPress={onClose}>
										Action
									</Button>
								</ModalFooter>
							</>
						)}
					</ModalContent>
				</Modal>
			</>
		</SectionCard>
	);
}

export default FilterMessageType;
