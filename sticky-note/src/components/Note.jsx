import React from 'react';
import { MdPushPin, MdDelete } from 'react-icons/md';

const Note = ({ note, onDelete, onTogglePin }) => {
  return (
    <div className="bg-white shadow rounded p-4 mt-10 relative">
      <div className="absolute right-2 top-2 flex gap-2">
        <button onClick={() => onTogglePin(note.id)}>
          <MdPushPin className={`text-xl ${note.pinned ? 'text-yellow-600' : 'text-gray-400'}`} />
        </button>
        <button onClick={() => onDelete(note.id)}>
          <MdDelete className="text-red-500 text-xl" />
        </button>
      </div>
      <h3 className="font-bold text-lg mb-1">{note.title}</h3>
      <p className="text-gray-700">{note.text}</p>
      <p className="text-xs text-gray-400 mt-2">{note.date}</p>
    </div>
  );
};

export default Note;
