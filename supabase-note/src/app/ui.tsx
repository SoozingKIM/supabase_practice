'use client';

import EmptyNote from '@/components/EmptyNote';
import Header from '@/components/Header';
import NewNote from '@/components/NewNote';
import NoteViewer from '@/components/NoteViewer';
import Sidebar from '@/components/Sidebar';
import { useCallback, useEffect, useState } from 'react';
import { supabase } from '../../utils/supabase';
import { Database } from '../../types_db';

export default function UI() {
  const [activeNoteId, setActiveNoteId] = useState<null | number>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [notes, setNotes] = useState<
    Database['public']['Tables']['note']['Row'][]
  >([]);
  const [search, setSearch] = useState<string>('');

  const fetchNotes = useCallback(async () => {
    const { data, error } = await supabase
      .from('note')
      .select('*')
      .order('id', { ascending: true })
      .ilike('title', `%${search}%`); // title에 search가 포함된 모든 글씨를 검색함.

    if (error) {
      alert(error.message);
      return;
    }
    setNotes(data);
  }, [search]);

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  // useEffect(() => {
  //   fetchNotes();
  // }, [search]);

  return (
    <main className="w-full h-screen flex flex-col">
      <Header />
      <div className="grow relative">
        <Sidebar
          activeNoteId={activeNoteId}
          setActiveNoteId={setActiveNoteId}
          setIsCreating={setIsCreating}
          notes={notes}
          search={search}
          setSearch={setSearch}
        />
        {isCreating ? (
          <NewNote
            setActiveNoteId={setActiveNoteId}
            fetchNotes={fetchNotes}
            setIsCreating={setIsCreating}
          />
        ) : activeNoteId ? (
          <NoteViewer
            setActiveNoteId={setActiveNoteId}
            fetchNotes={fetchNotes}
            note={notes.find((note) => note.id === activeNoteId)}
          />
        ) : (
          <EmptyNote />
        )}
      </div>
    </main>
  );
}
