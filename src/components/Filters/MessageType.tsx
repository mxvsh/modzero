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

function FilterMessageType() {
	const modal = useDisclosure();
	const [inputs, setInputs] = useState<InputType[] | null>(null);

	return (
		<div className='bg-neutral-50 border rounded-xl p-4'>
			<h1 className='font-semibold'>Message Type</h1>
			<p className='text-sm text-gray-500'>
				Select the message types you want to filter
			</p>

			<div className='mt-4 space-y-2'>
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
			</div>

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
		</div>
	);
}

export default FilterMessageType;
