'use client';

import EmptyNote from '@/components/EmptyNote';
import Header from '@/components/Header';
import NewNote from '@/components/NewNote';
import NoteViewer from '@/components/NoteViewer';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

const notes = [
  { id: 1, title: '노트 1', content: '노트 1 내용입니다.' },
  { id: 2, title: '노트 2', content: '노트 2 내용입니다.' },
  { id: 3, title: '노트 3', content: '노트 3 내용입니다.' },
];

export default function UI() {
  const [activeNoteId, setActiveNoteId] = useState<null | number>(null);
  const [isCreating, setIsCreating] = useState(false);
  return (
    <main className="w-full h-screen flex flex-col">
      <Header />
      <div className="grow relative">
        <Sidebar
          activeNoteId={activeNoteId}
          setActiveNoteId={setActiveNoteId}
          setIsCreating={setIsCreating}
          notes={notes}
        />
        {isCreating ? (
          <NewNote setIsCreating={setIsCreating} />
        ) : activeNoteId ? (
          <NoteViewer note={notes.find((note) => note.id === activeNoteId)} />
        ) : (
          <EmptyNote />
        )}

        {/* note viewer (Edit/View) */}
        {/* Empty note */}
      </div>
    </main>
  );
}
