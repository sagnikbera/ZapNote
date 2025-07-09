import React, { useReducer } from "react";
import {
  MdOutlineAddCircle,
  MdOutlineArchive,
  MdDeleteOutline,
} from "react-icons/md";
import { BsPinAngle } from "react-icons/bs";
import { noteReducer } from "../../reducers/noteReducer";

const InputBox = () => {
  const initialState = {
    title: "",
    text: "",
    notes: [],
  };

  const [{ title, text, notes }, noteDispatch] = useReducer(
    noteReducer,
    initialState
  );

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

  return (
    <div className="w-full p-4">
      {/* Centered Input Form */}
      <div className="w-full flex justify-center items-start mb-8">
        <div className="flex flex-col w-full max-w-md gap-4 bg-white p-6 rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Enter title"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
            value={title}
            onChange={onTitleChange}
          />
          <div className="flex flex-col border relative">
            <textarea
              placeholder="Enter text"
              className="w-full border border-gray-300 rounded-md px-4 py-2 pr-12 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-violet-500"
              value={text}
              onChange={onTextChange}
            />
            <button
              onClick={onAddClick}
              disabled={title.length === 0 || text.length === 0}
              className="absolute bottom-2 right-2 text-3xl text-violet-700 hover:text-violet-900 disabled:opacity-50"
            >
              <MdOutlineAddCircle />
            </button>
          </div>
        </div>
      </div>

      {/* Notes Display Section */}
      {notes?.length > 0 && (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map(({ title, text, id }) => (
            <div
              key={id}
              className="bg-white border border-gray-300 rounded-lg p-4 shadow-md flex flex-col justify-between"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg">{title}</h3>
                <button>
                  <BsPinAngle className="text-xl text-gray-600 hover:text-violet-700" />
                </button>
              </div>
              <p className="text-gray-700 mb-4">{text}</p>
              <div className="flex justify-end gap-3">
                <button>
                  <MdOutlineArchive className="text-xl text-gray-600 hover:text-violet-700" />
                </button>
                <button>
                  <MdDeleteOutline className="text-xl text-gray-600 hover:text-red-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InputBox;
