// app/component/post/PostEditor.tsx

"use client"; // 이 부분을 맨 위에 추가하여 이 컴포넌트가 클라이언트 컴포넌트임을 명시합니다.

import dynamic from 'next/dynamic';
import React from 'react';

// TiptapEditor 컴포넌트를 클라이언트 사이드에서만 로드하도록 설정
const DynamicTiptapEditor = dynamic(
  () => import('./TiptapEditor'), // TiptapEditor 컴포넌트의 상대 경로를 사용합니다.
  { ssr: false } // 이제 이 `ssr: false`는 클라이언트 컴포넌트 내부이므로 허용됩니다.
);

export default function PostEditor() {
  return (
    <>
      <div className="flex flex-col min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Notion Like Editor</h1>
        <div className="flex-grow max-w-4xl mx-auto w-full bg-white shadow-lg rounded-lg">
          {/* 동적으로 로드된 에디터 컴포넌트 */}
          <DynamicTiptapEditor />
        </div>
      </div>
    </>
  );
}