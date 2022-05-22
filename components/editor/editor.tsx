import React, { useState } from 'react'
import {
    useEditor,
    EditorContent,
    BubbleMenu,
    FloatingMenu,
} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Typography from '@tiptap/extension-typography'
import Highlight from '@tiptap/extension-highlight'

type EditorProps = {
    onChange: (value: string) => void
}

export default function EditorComponent ({ onChange }: EditorProps) {

    const [value, setValue] = useState<string>("")

    const editor = useEditor({
        extensions: [
            StarterKit,
            Highlight,
            Typography
        ],
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML())
        }
    })

    return (
        <div className="form-control p-2">
            {editor && <BubbleMenu className="bubble-menu" tippyOptions={{ duration: 100 }} editor={editor}>
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? 'is-active' : ''}
                    type="button"
                >
                    Grassetto
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? 'is-active' : ''}
                    type="button"
                >
                    Corsivo
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={editor.isActive('strike') ? 'is-active' : ''}
                    type="button"
                >
                    Barrato
                </button>
            </BubbleMenu>}

            {editor && <FloatingMenu className="floating-menu" tippyOptions={{ duration: 100 }} editor={editor}>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
                    type="button"
                >
                    H1
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
                    type="button"
                >
                    H2
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('bulletList') ? 'is-active' : ''}
                    type="button"
                >
                    Elenco puntato
                </button>
            </FloatingMenu>}

            <EditorContent className="input-control" editor={editor} />
        </div> 
    )
}