'use client';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const notes = [
  { id: 1, title: '노트 1', content: '노트 1 내용입니다.' },
  { id: 2, title: '노트 2', content: '노트 2 내용입니다.' },
  { id: 3, title: '노트 3', content: '노트 3 내용입니다.' },
];

export default function UI() {
  return (
    <main className="w-full h-screen flex flex-col">
      <Header />
      <div className="grow relative">
        <Sidebar notes={notes} />
        <div className="w-2/3 absolute top-0 bottom-0 right-0 bg-slate-300"></div>
        {/* new note */}
        {/* note viewer (Edit/View) */}
        {/* Empty note */}
      </div>
    </main>
  );
}
