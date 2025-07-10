import React from "react";
import { BsPinAngle } from "react-icons/bs";
import { MdOutlineArchive, MdDeleteOutline } from "react-icons/md";
import { MdRestoreFromTrash } from "react-icons/md";
import { MdUnarchive } from "react-icons/md";
import { TiPin } from "react-icons/ti";
import { useNotes } from "../../contexts/notes-context";
import { MdDeleteForever } from "react-icons/md";

const NoteCard = ({ id, title, text, isPinned }) => {
  const { noteDispatch, archive, bin, important } = useNotes();

  function isInArchive(archive, id) {
    return (
      Array.isArray(archive) && archive.some((note) => note && note.id === id)
    );
  }

  function isBin(bin, id) {
    return Array.isArray(bin) && bin.some((note) => note && note.id === id);
  }
  function isImp(important, id) {
    return (
      Array.isArray(important) &&
      important.some((note) => note && note.id === id)
    );
  }

  const onPinClick = (id) => {
    !isImp(important, id)
      ? noteDispatch({
          type: "PIN",
          payload: { id },
        })
      : noteDispatch({
          type: "UNPIN",
          payload: { id },
        });
  };

  const onArchiveClick = (id) => {
    if (!isInArchive(archive, id)) {
      noteDispatch({
        type: "ARCHIVE",
        payload: { id },
      });
    } else {
      noteDispatch({
        type: "REMOVE_ARCHIVE",
        payload: { id },
      });
    }
  };

  const onDeleteClick = (id) => {
    if (!isBin(bin, id)) {
      noteDispatch({
        type: "ADD_TO_BIN",
        payload: { id },
      });
    } else {
      noteDispatch({
        type: "REMOVE_FROM_BIN",
        payload: { id },
      });
    }
  };

  const onDeleteForever = (id) => {
    return noteDispatch({
      type: "DELETE_FOREVER",
      payload: { id },
    });
  };

  return (
    <>
      {/* Notes Display Section */}
      <div
        key={id}
        className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between"
      >
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white">
            {title}
          </h3>
          {!isInArchive(archive, id) && !isBin(bin, id) && (
            <button onClick={() => onPinClick(id)}>
              {!isImp(important, id) ? (
                <BsPinAngle className="text-2xl text-gray-600 dark:text-gray-300 hover:text-violet-700 dark:hover:text-violet-400" />
              ) : (
                <TiPin className="text-3xl hover:text-gray-600 dark:hover:text-gray-300 text-violet-800 dark:text-violet-400" />
              )}
            </button>
          )}
        </div>
        <p className="text-gray-700 dark:text-gray-200 text-sm sm:text-base mb-4">
          {text}
        </p>
        <div className="flex justify-end gap-3">
          {!isImp(important,id) && !isBin(bin, id) && (
            <button onClick={() => onArchiveClick(id)}>
              {!isInArchive(archive, id) && (
                <MdOutlineArchive className="text-2xl text-gray-600 dark:text-gray-300 hover:text-violet-700 dark:hover:text-violet-400" />
              )}
              {isInArchive(archive, id) && (
                <MdUnarchive className="text-2xl text-gray-600 dark:text-gray-300 hover:text-violet-700 dark:hover:text-violet-400" />
              )}
            </button>
          )}
          {!isImp(important,id) && isBin(bin, id) && (
            <button onClick={() => onDeleteForever(id)}>
              <MdDeleteForever className="text-2xl text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400" />
            </button>
          )}
          {!isImp(important,id) && <button onClick={() => onDeleteClick(id)}>
            {!isBin(bin, id) && (
              <MdDeleteOutline className="text-2xl text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400" />
            )}

            {isBin(bin, id) && (
              <MdRestoreFromTrash className="text-2xl text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400" />
            )}
          </button>}
        </div>
      </div>
    </>
  );
};

export default NoteCard;
