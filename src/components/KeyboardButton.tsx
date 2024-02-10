import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure,
} from '@nextui-org/react';
import { useRef, useState } from 'react';
import { TbPlus } from 'react-icons/tb';
import { InlineKeyboardButton } from 'telegraf/types';

export function KeyboardButtonBuilder() {
	const modal = useDisclosure({});
	const [buttons, setButtons] = useState<InlineKeyboardButton.UrlButton[][]>(
		[]
	);
	const [entry, setEntry] = useState<InlineKeyboardButton.UrlButton | null>(
		null
	);
	const [entryIndex, setEntryIndex] = useState<[number, number] | null>(null);
	const [isNewEntry, setIsNewEntry] = useState(false);

	const textRef = useRef<HTMLInputElement>(null);
	const urlRef = useRef<HTMLInputElement>(null);

	return (
		<div>
			<Button disableRipple size='sm' color='primary' onClick={modal.onOpen}>
				Configure Buttons
			</Button>
			<Modal
				isOpen={modal.isOpen}
				onOpenChange={modal.onOpenChange}
				isDismissable={false}
			>
				<ModalContent>
					{() => (
						<>
							<ModalHeader className='flex flex-col gap-1'>Buttons</ModalHeader>
							<ModalBody>
								{entry ? (
									<div className='space-y-4'>
										<Input
											ref={textRef}
											size='sm'
											placeholder='Enter text'
											defaultValue={entry.text}
										/>
										<Input
											ref={urlRef}
											size='sm'
											placeholder='Enter URL'
											defaultValue={entry.url}
										/>
										<div className='flex items-center gap-2'>
											<Button
												size='sm'
												color='primary'
												onClick={() => {
													if (entryIndex) {
														const [row, col] = entryIndex;
														const newButtons = [...buttons];
														newButtons[row][col] = {
															text: textRef.current?.value || '',
															url: urlRef.current?.value || '',
														};
														setButtons(newButtons);
													}
													setEntry(null);
													setEntryIndex(null);
													setIsNewEntry(false);
												}}
											>
												Save
											</Button>
											<Button
												size='sm'
												variant='bordered'
												color='danger'
												onClick={() => {
													setEntry(null);
													setEntryIndex(null);

													if (entryIndex) {
														const [row, col] = entryIndex;
														const newButtons = [...buttons];
														newButtons[row].splice(col, 1);
														setButtons(newButtons);
													}

													setIsNewEntry(false);
												}}
											>
												{isNewEntry ? 'Cancel' : 'Delete'}
											</Button>
										</div>
									</div>
								) : null}

								<div className={entry ? 'hidden' : 'space-y-4'}>
									{buttons.map((cols, index) => (
										<div key={index} className='flex items-center gap-2'>
											{cols.map((b) => (
												<div key={b.url}>
													<Button
														variant='bordered'
														color='success'
														size='sm'
														onClick={() => {
															setEntry(b);
															setEntryIndex([index, cols.indexOf(b)]);
															setIsNewEntry(false);
														}}
													>
														{b.text}
													</Button>
												</div>
											))}
											<Button
												size='sm'
												color='primary'
												onClick={() => {
													setEntry({ text: '', url: '' });
													setEntryIndex([index, cols.length]);
													setIsNewEntry(true);
												}}
												startContent={<TbPlus />}
											>
												Column
											</Button>
										</div>
									))}

									<Button
										disableRipple
										size='sm'
										color='primary'
										variant='bordered'
										fullWidth
										onClick={() => {
											setButtons([...buttons, []]);
										}}
									>
										Add Row
									</Button>
								</div>
							</ModalBody>
							<ModalFooter></ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</div>
	);
}
