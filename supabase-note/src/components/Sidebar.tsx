'use client';

type note = { id: number; title: string; content: string };

export default function Sidebar({ notes }) {
  return (
    <aside className="absolute top-0 left-0 bottom-0 w-1/3  overflow-y-scroll p-2">
      <button className="p-2 text-lg font-bold border border-gray-600 rounded-lg w-full p-4">
        ➕ 새로운 노트
      </button>
      <ul className="mt-2 flex flex-col gap-2">
        {notes.map((note: note) => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    </aside>
  );
}
