import React, { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

const App = () => {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('notes');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => setNotes([note, ...notes]);
  const deleteNote = (id) => setNotes(notes.filter(n => n.id !== id));
  const togglePin = (id) => {
    setNotes(notes.map(note =>
      note.id === id ? { ...note, pinned: !note.pinned } : note
    ));
  };

  return (
    <div className="min-h-screen bg-yellow-50 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">📝 Sticky Notes</h1>
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} onTogglePin={togglePin} />
    </div>
  );
};

export default App;
