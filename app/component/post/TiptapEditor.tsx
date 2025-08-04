"use client"; // 이 지시문은 그대로 유지합니다.

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React, {useState} from 'react';

const TiptapEditor = () => {
  //
  const [contentHtml, setContentHtml] = useState('<p>안녕하세요, 여기에 내용을 입력해보세요!</p>');


  const editor = useEditor({
    extensions: [
      StarterKit,
      // 여기에 필요한 다른 확장 기능들을 추가합니다.
    ],
    content: '<p>안녕하세요, 여기에 내용을 입력해보세요!</p>',
    onUpdate: ({ editor }) => {
      setContentHtml(editor.getHTML()); // 내용 업데이트 시 HTML 저장
      // console.log(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none border p-4 rounded-md min-h-[300px]',
      },
    },
    // 이 부분을 추가해주세요!
    immediatelyRender: false,
  });

  if (!editor) {
    return null; // 에디터가 아직 초기화되지 않았으면 아무것도 렌더링하지 않음
  }

  return (
    <div className="flex flex-col w-full">
      {/* 에디터 컨트롤 버튼 (이전과 동일) */}
      <div className="flex flex-wrap gap-2 p-4 border-b">
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`px-3 py-1 rounded ${editor.isActive('heading', { level: 1 }) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          H1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`px-3 py-1 rounded ${editor.isActive('heading', { level: 2 }) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-3 py-1 rounded ${editor.isActive('bold') ? 'bg-blue-500 text-white' : 'bg-gray-200'} font-bold`}
        >
          B
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-3 py-1 rounded ${editor.isActive('italic') ? 'bg-blue-500 text-white' : 'bg-gray-200'} italic`}
        >
          I
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`px-3 py-1 rounded ${editor.isActive('paragraph') ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Paragraph
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-3 py-1 rounded ${editor.isActive('bulletList') ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          List
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`px-3 py-1 rounded ${editor.isActive('codeBlock') ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Code
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className="px-3 py-1 rounded bg-gray-200"
        >
          Undo
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className="px-3 py-1 rounded bg-gray-200"
        >
          Redo
        </button>
      </div>
      {/* 에디터 본문 */}
      <div className="p-4">
        <EditorContent editor={editor} />

        {/* 프리뷰 영역 (예시) */}
        <div className="mt-8 p-4 border rounded-md bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">미리보기 (HTML)</h2>
          <div className="prose" dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
      </div>
    </div>
  );
};

export default TiptapEditor;