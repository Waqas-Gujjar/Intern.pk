import React from 'react';
import Note from './Note';

const NoteList = ({ notes, onDelete, onTogglePin }) => {
  const pinned = notes.filter(n => n.pinned);
  const others = notes.filter(n => !n.pinned);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[...pinned, ...others].map(note => (
        <Note
          key={note.id}
          note={note}
          onDelete={onDelete}
          onTogglePin={onTogglePin}
        />
      ))}
    </div>
  );
};

export default NoteList;
