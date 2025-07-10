import React from "react";
import { BsPinAngle } from "react-icons/bs";
import { MdOutlineArchive, MdDeleteOutline } from "react-icons/md";
import { TiPin } from "react-icons/ti";
import { useNotes } from "../../contexts/notes-context";

const NoteCard = ({ id, title, text, isPinned }) => {
  const { noteDispatch, archive } = useNotes();

  function isInArchive(archive , id){
    return archive.some(id);
  }

  const onPinClick = (id) => {
    !isPinned ? noteDispatch({
        type: "PIN",
        payload: { id },
      }) : noteDispatch({
        type: "UNPIN",
        payload: {id}
      })
  };

  const onArchiveClick = (id) => {
     !isInArchive ? noteDispatch({
      type: "ARCHIVE",
      payload: {id}
    }) : noteDispatch({
      type: "REMOVE_ARCHIVE",
      payload: {id}
    })
  }

  return (
    <>
      {/* Notes Display Section */}
      <div
        key={id}
        className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between"
      >
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-white">
            {title}
          </h3>
          { !isInArchive && <button onClick={() => onPinClick(id)}>
            {!isPinned && (
              <BsPinAngle className="text-2xl text-gray-600 dark:text-gray-300 hover:text-violet-700 dark:hover:text-violet-400" />
            )}
            {isPinned && (
              <TiPin className="text-3xl  hover:text-gray-600 dark:hover:text-gray-300 text-violet-800 dark:text-violet-400" />
            )}
          </button>}
        </div>
        <p className="text-gray-700 dark:text-gray-200 text-sm sm:text-base mb-4">
          {text}
        </p>
        <div className="flex justify-end gap-3">
          <button onClick={()=>onArchiveClick(id)}>
            <MdOutlineArchive className="text-2xl text-gray-600 dark:text-gray-300 hover:text-violet-700 dark:hover:text-violet-400" />
          </button>
          <button>
            <MdDeleteOutline className="text-2xl text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400" />
          </button>
        </div>
      </div>
    </>
  );
};

export default NoteCard;
