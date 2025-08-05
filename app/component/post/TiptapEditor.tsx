"use client"; // 이 지시문은 그대로 유지합니다.
import "@/public/styles/tittap.css"
import {EditorContent, useEditor} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React, {useState} from 'react';
import {TextStyleKit} from "@tiptap/extension-text-style";
import TiptapMenu from "@/app/component/post/TiptapMenu";


const extensions = [TextStyleKit, StarterKit]

const TiptapEditor = () => {
  const [contentHtml, setContentHtml] = useState('<p>안녕하세요, 여기에 내용을 입력해보세요!</p>');

  const editor = useEditor({
    extensions,
    content: `
      <h2>안녕하세요, 여기에 내용을 입력해보세요!</h2>
      <p>
        이곳은 <em>기본적인</em> <strong>Tiptap</strong> 예시입니다. 일반적인 텍스트 에디터에서 예상할 수 있는 모든 기본 텍스트 스타일이 있습니다. 목록을 확인해 보세요:
      </p>
      <ul>
        <li>항목 1</li>
        <li>항목 2</li>
      </ul>
      <p>
        멋지지 않나요? 이 모든 것은 편집 가능합니다. 더 있습니다. 코드 블록을 시도해 보세요:
      </p>
      <pre><code class="language-css">body {
        display: none;
      }</code></pre>
      <p>
        이것이 전부가 아닙니다. 다른 예시들도 확인해보세요.
      </p>
      <blockquote>
        와, 정말 멋져요. 잘했어요! 👏
      </blockquote>
    `,
    onUpdate: ({editor}) => {
      setContentHtml(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none w-full min-h-[400px]',
      },
    },
    immediatelyRender: false,
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-col h-full">
      <TiptapMenu editor={editor}/>
      <div className="flex-grow p-3 overflow-y-auto border-0 rounded-md">
        <EditorContent editor={editor}/>
      </div>
    </div>
  );
};

export default TiptapEditor;