import React from "react";
import { MdOutlineAddCircle } from "react-icons/md";
import NoteCard from "../NoteCard/NoteCard";
import { useNotes } from "../../contexts/notes-context";

const InputBox = () => {
  const { title, text, notes, noteDispatch } = useNotes();

  const onTitleChange = (e) => {
    noteDispatch({ type: "TITLE", payload: e.target.value });
  };

  const onTextChange = (e) => {
    noteDispatch({ type: "TEXT", payload: e.target.value });
  };

  const onAddClick = () => {
    noteDispatch({ type: "ADD_NOTE" });
    noteDispatch({ type: "CLEAR_INPUT" });
  };

  const pinnedNotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
  const otherNotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned);

  return (
    <div className="w-full px-4 py-6 sm:px-6 lg:px-12">
      {/* Centered Input Form */}
      <div className="w-full flex justify-center items-start mb-8">
        <div className="flex flex-col w-full max-w-md gap-4 bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Enter title"
            className="border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm sm:text-base"
            value={title}
            onChange={onTitleChange}
          />
          <div className="flex flex-col border border-transparent relative">
            <textarea
              placeholder="Enter text"
              className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white rounded-md px-4 py-2 pr-12 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm sm:text-base"
              value={text}
              onChange={onTextChange}
            />
            <button
              onClick={onAddClick}
              disabled={title.length === 0 || text.length === 0}
              className="absolute bottom-2 right-2 text-4xl text-violet-700 dark:text-violet-400 hover:text-violet-900 dark:hover:text-violet-300 disabled:opacity-50"
            >
              <MdOutlineAddCircle />
            </button>
          </div>
        </div>
      </div>
      {pinnedNotes?.length > 0 && (
        <div>
           <h3 className="font-bold p-2">Pin Notes</h3>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {pinnedNotes.map(({ id, title, text, isPinned }) => (
            <NoteCard
              key={id}
              id={id}
              title={title}
              text={text}
              isPinned={isPinned}
            />
          ))}
        </div>
        </div>
      )}
      {otherNotes?.length > 0 && (
        <div className="font-bold p-2">
        {
            pinnedNotes?.length>0 && <h3>Other Notes</h3>
        }
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {otherNotes.map(({ id, title, text, isPinned }) => (
            <NoteCard
              key={id}
              id={id}
              title={title}
              text={text}
              isPinned={isPinned}
            />
          ))}
        </div>
        </div>
      )}
    </div>
  );
};

export default InputBox;
