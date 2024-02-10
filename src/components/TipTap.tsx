'use client';

import { Button } from '@nextui-org/react';
import { useEditor, EditorContent, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { BoldIcon, ItalicIcon } from 'lucide-react';

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

type TipTapProps = {
	hint?: string;
};
function TipTap({ hint }: TipTapProps) {
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

	if (!editor) {
		return null;
	}

	return (
		<div className='space-y-4 border rounded-xl'>
			<div className='space-y-2'>
				<div className='p-2 bg-neutral-50 border-b rounded-t-xl'>
					<Toolbar editor={editor} />
				</div>

				<div className='p-4'>
					<EditorContent editor={editor} placeholder='Enter your content' />
					<p className='text-gray-500 text-xs mt-2'>
						{hint || 'You can use Markdown to format your text'}
					</p>
				</div>
			</div>
		</div>
	);
}

export { TipTap };
