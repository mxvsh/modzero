'use client';

import { Button } from '@nextui-org/react';
import { useEditor, EditorContent, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { BoldIcon, CalendarIcon, ItalicIcon, SendIcon } from 'lucide-react';
import htmlToMarkdown from '@wcj/html-to-markdown';
import { trpc } from '~lib/client';

type ToolbarProps = {
	editor: Editor;
};
const Toolbar = ({ editor }: ToolbarProps) => {
	return (
		<div className='flex gap-2'>
			<Button
				disableRipple
				variant={editor.isActive('bold') ? 'faded' : 'light'}
				onClick={() => editor.chain().focus().toggleBold().run()}
				startContent={<BoldIcon />}
				isIconOnly
				className='rounded-md'
			/>
			<Button
				disableRipple
				variant={editor.isActive('italic') ? 'faded' : 'light'}
				onClick={() => editor.chain().focus().toggleItalic().run()}
				startContent={<ItalicIcon />}
				isIconOnly
				className='rounded-md'
			/>
		</div>
	);
};

type Props = {
	chatId: string;
};
function AnnouncementCreate({ chatId }: Props) {
	const createAnnouncement = trpc.createAnnouncement.useMutation();

	const editor = useEditor({
		extensions: [StarterKit],
		content: '<p>Hello World! 🌎️</p>',
		editorProps: {
			attributes: {
				class:
					'max-h-[300px] overflow-y-auto relative w-full h-full focus:outline-none focus:ring-0 focus:ring-transparent border p-4 rounded-xl',
			},
		},
	});

	async function createPost() {
		const html = editor?.getHTML();
		const markdown = await htmlToMarkdown({ html });

		if (markdown)
			createAnnouncement.mutate({
				text: markdown,
				chatId,
			});
	}

	if (!editor) {
		return null;
	}

	return (
		<div className='space-y-4 p-4'>
			<p className='text-gray-500'>
				Announcements are a great way to share important information with your
				community.
			</p>

			<div className='space-y-4 border rounded-xl'>
				<div className='space-y-2'>
					<div className='p-2 bg-neutral-50 border-b rounded-t-xl'>
						<Toolbar editor={editor} />
					</div>

					<div className='p-4'>
						<EditorContent editor={editor} placeholder='Enter your content' />
						<p className='mt-1 text-gray-500 text-xs'>
							You can use Markdown to format your text.
						</p>
						<div className='flex justify-end gap-2'>
							<Button
								disableRipple
								color='primary'
								variant='bordered'
								startContent={<CalendarIcon size={15} />}
							>
								Schedule
							</Button>

							<Button
								disableRipple
								color='primary'
								startContent={<SendIcon size={15} />}
								onClick={createPost}
								isLoading={createAnnouncement.isLoading}
							>
								Post
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export { AnnouncementCreate };
