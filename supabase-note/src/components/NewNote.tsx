'use client';

import { useState } from 'react';
import { supabase } from '../../utils/supabase';

export default function NewNote({
  fetchNotes,
  setActiveNoteId,
  setIsCreating,
}) {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const onSave = async () => {
    if (!title || !content) {
      alert('제목과 내용을 입력해주세요.');
      return;
    }

    const { data, error } = await supabase
      .from('note')
      .insert({
        title,
        content,
      })
      .select();

    if (error) {
      alert(error.message);
    }

    await fetchNotes();
    setIsCreating(false);
    setActiveNoteId(data[0].id);
  };
  return (
    <div className="w-2/3 p-2 flex flex-col gap-2 absolute top-0 bottom-0 right-0">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="노트의 제목을 입력하세요."
        className="border rounded-md border-gray-300 text-xl p-2"
      />
      <textarea
        className="border rounded-md border-gray-300 text-lg p-2 grow"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="w-full flex justify-end">
        <button
          onClick={() => onSave()}
          className="p-2 px-3 rounded-full border-2 border-green-500 hover:bg-green-300 transition-all duration-300 ease-in-out "
        >
          저장
        </button>
      </div>
    </div>
  );
}
