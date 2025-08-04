"use client"; // 이 지시문은 그대로 유지합니다.
import "@/public/styles/tittap.css"
import {type Editor, EditorContent, useEditor, useEditorState} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React, {useState} from 'react';
import {TextStyleKit} from "@tiptap/extension-text-style";



const extensions = [TextStyleKit, StarterKit]

function MenuBar({ editor }: { editor: Editor }) {
  const editorState = useEditorState({
    editor,
    selector: ctx => ({
      isBold: ctx.editor.isActive('bold') ?? false,
      canBold: ctx.editor.can().chain().toggleBold().run() ?? false,
      isItalic: ctx.editor.isActive('italic') ?? false,
      canItalic: ctx.editor.can().chain().toggleItalic().run() ?? false,
      isStrike: ctx.editor.isActive('strike') ?? false,
      canStrike: ctx.editor.can().chain().toggleStrike().run() ?? false,
      isCode: ctx.editor.isActive('code') ?? false,
      canCode: ctx.editor.can().chain().toggleCode().run() ?? false,
      canClearMarks: ctx.editor.can().chain().unsetAllMarks().run() ?? false,
      isParagraph: ctx.editor.isActive('paragraph') ?? false,
      isHeading1: ctx.editor.isActive('heading', { level: 1 }) ?? false,
      isHeading2: ctx.editor.isActive('heading', { level: 2 }) ?? false,
      isHeading3: ctx.editor.isActive('heading', { level: 3 }) ?? false,
      isHeading4: ctx.editor.isActive('heading', { level: 4 }) ?? false,
      isHeading5: ctx.editor.isActive('heading', { level: 5 }) ?? false,
      isHeading6: ctx.editor.isActive('heading', { level: 6 }) ?? false,
      isBulletList: ctx.editor.isActive('bulletList') ?? false,
      isOrderedList: ctx.editor.isActive('orderedList') ?? false,
      isCodeBlock: ctx.editor.isActive('codeBlock') ?? false,
      isBlockquote: ctx.editor.isActive('blockquote') ?? false,
      canUndo: ctx.editor.can().chain().undo().run() ?? false,
      canRedo: ctx.editor.can().chain().redo().run() ?? false,
    }),
  });

  // 공통 버튼 스타일을 변수로 정의하여 가독성을 높입니다.
  const baseButtonClasses = "px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out";
  const defaultButtonClasses = "bg-gray-200 text-gray-800 hover:bg-gray-300";
  const activeButtonClasses = "bg-blue-500 text-white hover:bg-blue-600";
  const disabledButtonClasses = "opacity-50 cursor-not-allowed";

  return (
    // 기존 .tiptap-menubar-container 대신 Tailwind flexbox와 패딩을 적용합니다.
    <div className="flex flex-col mb-4 p-4 border-b border-gray-200">
      {/* 기존 .tiptap-button-group 대신 Tailwind flexbox와 gap을 적용합니다. */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editorState.canBold}
          className={`${baseButtonClasses} ${editorState.isBold ? activeButtonClasses : defaultButtonClasses} ${!editorState.canBold ? disabledButtonClasses : ''}`}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editorState.canItalic}
          className={`${baseButtonClasses} ${editorState.isItalic ? activeButtonClasses : defaultButtonClasses} ${!editorState.canItalic ? disabledButtonClasses : ''} italic`}
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editorState.canStrike}
          className={`${baseButtonClasses} ${editorState.isStrike ? activeButtonClasses : defaultButtonClasses} ${!editorState.canStrike ? disabledButtonClasses : ''} line-through`}
        >
          Strike
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editorState.canCode}
          className={`${baseButtonClasses} ${editorState.isCode ? activeButtonClasses : defaultButtonClasses} ${!editorState.canCode ? disabledButtonClasses : ''} font-mono`}
        >
          Code
        </button>
        <button onClick={() => editor.chain().focus().unsetAllMarks().run()}
                className={`${baseButtonClasses} ${defaultButtonClasses}`}
        >
          Clear marks
        </button>
        <button onClick={() => editor.chain().focus().clearNodes().run()}
                className={`${baseButtonClasses} ${defaultButtonClasses}`}
        >
          Clear nodes
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`${baseButtonClasses} ${editorState.isParagraph ? activeButtonClasses : defaultButtonClasses}`}
        >
          Paragraph
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`${baseButtonClasses} ${editorState.isHeading1 ? activeButtonClasses : defaultButtonClasses}`}
        >
          H1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`${baseButtonClasses} ${editorState.isHeading2 ? activeButtonClasses : defaultButtonClasses}`}
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`${baseButtonClasses} ${editorState.isHeading3 ? activeButtonClasses : defaultButtonClasses}`}
        >
          H3
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
          className={`${baseButtonClasses} ${editorState.isHeading4 ? activeButtonClasses : defaultButtonClasses}`}
        >
          H4
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
          className={`${baseButtonClasses} ${editorState.isHeading5 ? activeButtonClasses : defaultButtonClasses}`}
        >
          H5
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
          className={`${baseButtonClasses} ${editorState.isHeading6 ? activeButtonClasses : defaultButtonClasses}`}
        >
          H6
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`${baseButtonClasses} ${editorState.isBulletList ? activeButtonClasses : defaultButtonClasses}`}
        >
          Bullet list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`${baseButtonClasses} ${editorState.isOrderedList ? activeButtonClasses : defaultButtonClasses}`}
        >
          Ordered list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`${baseButtonClasses} ${editorState.isCodeBlock ? activeButtonClasses : defaultButtonClasses}`}
        >
          Code block
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`${baseButtonClasses} ${editorState.isBlockquote ? activeButtonClasses : defaultButtonClasses}`}
        >
          Blockquote
        </button>
        <button onClick={() => editor.chain().focus().setHorizontalRule().run()}
                className={`${baseButtonClasses} ${defaultButtonClasses}`}
        >
          Horizontal rule
        </button>
        <button onClick={() => editor.chain().focus().setHardBreak().run()}
                className={`${baseButtonClasses} ${defaultButtonClasses}`}
        >
          Hard break
        </button>
        <button onClick={() => editor.chain().focus().undo().run()} disabled={!editorState.canUndo}
                className={`${baseButtonClasses} ${defaultButtonClasses} ${!editorState.canUndo ? disabledButtonClasses : ''}`}
        >
          Undo
        </button>
        <button onClick={() => editor.chain().focus().redo().run()} disabled={!editorState.canRedo}
                className={`${baseButtonClasses} ${defaultButtonClasses} ${!editorState.canRedo ? disabledButtonClasses : ''}`}
        >
          Redo
        </button>
      </div>
    </div>
  )
}

// function MenuBar({ editor }: { editor: Editor }) {
//   const editorState = useEditorState({
//     editor,
//     selector: ctx => ({
//       isBold: ctx.editor.isActive('bold') ?? false,
//       canBold: ctx.editor.can().chain().toggleBold().run() ?? false,
//       isItalic: ctx.editor.isActive('italic') ?? false,
//       canItalic: ctx.editor.can().chain().toggleItalic().run() ?? false,
//       isStrike: ctx.editor.isActive('strike') ?? false,
//       canStrike: ctx.editor.can().chain().toggleStrike().run() ?? false,
//       isCode: ctx.editor.isActive('code') ?? false,
//       canCode: ctx.editor.can().chain().toggleCode().run() ?? false,
//       canClearMarks: ctx.editor.can().chain().unsetAllMarks().run() ?? false,
//       isParagraph: ctx.editor.isActive('paragraph') ?? false,
//       isHeading1: ctx.editor.isActive('heading', { level: 1 }) ?? false,
//       isHeading2: ctx.editor.isActive('heading', { level: 2 }) ?? false,
//       isHeading3: ctx.editor.isActive('heading', { level: 3 }) ?? false,
//       isHeading4: ctx.editor.isActive('heading', { level: 4 }) ?? false,
//       isHeading5: ctx.editor.isActive('heading', { level: 5 }) ?? false,
//       isHeading6: ctx.editor.isActive('heading', { level: 6 }) ?? false,
//       isBulletList: ctx.editor.isActive('bulletList') ?? false,
//       isOrderedList: ctx.editor.isActive('orderedList') ?? false,
//       isCodeBlock: ctx.editor.isActive('codeBlock') ?? false,
//       isBlockquote: ctx.editor.isActive('blockquote') ?? false,
//       canUndo: ctx.editor.can().chain().undo().run() ?? false,
//       canRedo: ctx.editor.can().chain().redo().run() ?? false,
//     }),
//   });
//
//   // 공통 버튼 스타일을 변수로 정의하여 가독성을 높입니다.
//   const baseButtonClasses = "px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out";
//   const defaultButtonClasses = "bg-gray-200 text-gray-800 hover:bg-gray-300";
//   const activeButtonClasses = "bg-blue-500 text-white hover:bg-blue-600";
//   const disabledButtonClasses = "opacity-50 cursor-not-allowed";
//
//   return (
//     // 기존 .tiptap-menubar-container 대신 Tailwind flexbox와 패딩을 적용합니다.
//     <div className="flex flex-col mb-4 p-4 border-b border-gray-200">
//       {/* 기존 .tiptap-button-group 대신 Tailwind flexbox와 gap을 적용합니다. */}
//       <div className="flex flex-wrap gap-2">
//         <button
//           onClick={() => editor.chain().focus().toggleBold().run()}
//           disabled={!editorState.canBold}
//           className={`${baseButtonClasses} ${editorState.isBold ? activeButtonClasses : defaultButtonClasses} ${!editorState.canBold ? disabledButtonClasses : ''}`}
//         >
//           Bold
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleItalic().run()}
//           disabled={!editorState.canItalic}
//           className={`${baseButtonClasses} ${editorState.isItalic ? activeButtonClasses : defaultButtonClasses} ${!editorState.canItalic ? disabledButtonClasses : ''} italic`}
//         >
//           Italic
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleStrike().run()}
//           disabled={!editorState.canStrike}
//           className={`${baseButtonClasses} ${editorState.isStrike ? activeButtonClasses : defaultButtonClasses} ${!editorState.canStrike ? disabledButtonClasses : ''} line-through`}
//         >
//           Strike
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleCode().run()}
//           disabled={!editorState.canCode}
//           className={`${baseButtonClasses} ${editorState.isCode ? activeButtonClasses : defaultButtonClasses} ${!editorState.canCode ? disabledButtonClasses : ''} font-mono`}
//         >
//           Code
//         </button>
//         <button onClick={() => editor.chain().focus().unsetAllMarks().run()}
//                 className={`${baseButtonClasses} ${defaultButtonClasses}`}
//         >
//           Clear marks
//         </button>
//         <button onClick={() => editor.chain().focus().clearNodes().run()}
//                 className={`${baseButtonClasses} ${defaultButtonClasses}`}
//         >
//           Clear nodes
//         </button>
//         <button
//           onClick={() => editor.chain().focus().setParagraph().run()}
//           className={`${baseButtonClasses} ${editorState.isParagraph ? activeButtonClasses : defaultButtonClasses}`}
//         >
//           Paragraph
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
//           className={`${baseButtonClasses} ${editorState.isHeading1 ? activeButtonClasses : defaultButtonClasses}`}
//         >
//           H1
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
//           className={`${baseButtonClasses} ${editorState.isHeading2 ? activeButtonClasses : defaultButtonClasses}`}
//         >
//           H2
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
//           className={`${baseButtonClasses} ${editorState.isHeading3 ? activeButtonClasses : defaultButtonClasses}`}
//         >
//           H3
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
//           className={`${baseButtonClasses} ${editorState.isHeading4 ? activeButtonClasses : defaultButtonClasses}`}
//         >
//           H4
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
//           className={`${baseButtonClasses} ${editorState.isHeading5 ? activeButtonClasses : defaultButtonClasses}`}
//         >
//           H5
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
//           className={`${baseButtonClasses} ${editorState.isHeading6 ? activeButtonClasses : defaultButtonClasses}`}
//         >
//           H6
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleBulletList().run()}
//           className={`${baseButtonClasses} ${editorState.isBulletList ? activeButtonClasses : defaultButtonClasses}`}
//         >
//           Bullet list
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleOrderedList().run()}
//           className={`${baseButtonClasses} ${editorState.isOrderedList ? activeButtonClasses : defaultButtonClasses}`}
//         >
//           Ordered list
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleCodeBlock().run()}
//           className={`${baseButtonClasses} ${editorState.isCodeBlock ? activeButtonClasses : defaultButtonClasses}`}
//         >
//           Code block
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleBlockquote().run()}
//           className={`${baseButtonClasses} ${editorState.isBlockquote ? activeButtonClasses : defaultButtonClasses}`}
//         >
//           Blockquote
//         </button>
//         <button onClick={() => editor.chain().focus().setHorizontalRule().run()}
//                 className={`${baseButtonClasses} ${defaultButtonClasses}`}
//         >
//           Horizontal rule
//         </button>
//         <button onClick={() => editor.chain().focus().setHardBreak().run()}
//                 className={`${baseButtonClasses} ${defaultButtonClasses}`}
//         >
//           Hard break
//         </button>
//         <button onClick={() => editor.chain().focus().undo().run()} disabled={!editorState.canUndo}
//                 className={`${baseButtonClasses} ${defaultButtonClasses} ${!editorState.canUndo ? disabledButtonClasses : ''}`}
//         >
//           Undo
//         </button>
//         <button onClick={() => editor.chain().focus().redo().run()} disabled={!editorState.canRedo}
//                 className={`${baseButtonClasses} ${defaultButtonClasses} ${!editorState.canRedo ? disabledButtonClasses : ''}`}
//         >
//           Redo
//         </button>
//       </div>
//     </div>
//   )
// }


export default MenuBar;