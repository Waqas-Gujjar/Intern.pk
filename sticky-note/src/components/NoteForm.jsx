import React, { useState } from 'react';
import { MdOutlinePushPin, MdAddAlert, MdImage } from 'react-icons/md';
import { BsPalette2 } from 'react-icons/bs';
import { IoMdCheckboxOutline } from 'react-icons/io';
import { AiOutlineUserAdd } from 'react-icons/ai';

const NoteForm = ({ onAdd }) => {
  const [showFullForm, setShowFullForm] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() && !text.trim()) return;

    onAdd({
      id: Date.now(),
      title: title.trim(),
      text: text.trim(),
      pinned: false,
      date: new Date().toLocaleString(),
    });

    // Reset form
    setTitle('');
    setText('');
    setShowFullForm(false);
  };

  const handleClose = (e) => {
    e.stopPropagation(); // Prevent form from expanding again
    setTitle('');
    setText('');
    setShowFullForm(false);
  };

  return (
    <div className="flex justify-center">
      <div
        className="w-full md:w-[600px]"
        onClick={() => setShowFullForm(true)}
      >
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-md p-4 relative transition-all"
        >
          {showFullForm && (
            <div className="flex justify-between items-start">
              <input
                type="text"
                className="w-full outline-none text-lg font-medium"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <button type="button">
                <MdOutlinePushPin className="text-gray-500 text-xl hover:text-black" />
              </button>
            </div>
          )}

          <textarea
            className="w-full outline-none resize-none mt-2 text-gray-700"
            placeholder="Take a note..."
            rows={showFullForm ? 2 : 1}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          {showFullForm && (
            <div className="flex justify-between items-center mt-3">
              <div className="flex gap-3 text-gray-500 text-xl">
                <MdAddAlert />
                <BsPalette2 />
                <AiOutlineUserAdd />
                <MdImage />
                <IoMdCheckboxOutline />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="text-sm font-medium hover:text-black"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="text-sm font-medium text-gray-600 hover:text-black"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default NoteForm;
