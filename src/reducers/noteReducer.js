import { v4 as uuidv4 } from "uuid";

export const noteReducer = (state, { type, payload }) => {
  switch (type) {
    case "TITLE":
      return {
        ...state,
        title: payload,
      };
    case "TEXT":
      return {
        ...state,
        text: payload,
      };
    case "ADD_NOTE":
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            text: state.text,
            title: state.title,
            id: uuidv4(),
            isPinned: false,
          },
        ],
      };
    case "CLEAR_INPUT":
      return {
        ...state,
        title: "",
        text: "",
      };
    // case "PIN":
    //   return {
    //     ...state,
    //     notes: state.notes.map((note) =>
    //       note.id === payload.id ? { ...note, isPinned: !note.isPinned } : note
    //     ),
    //   };
    // case "UNPIN":
    //   return {
    //     ...state,
    //     notes: state.notes.map((note) =>
    //       note.id === payload.id ? { ...note, isPinned: !note.isPinned } : note
    //     ),
    //   };
    case "PIN":
      const noteToPin = state.notes.find(({ id }) => id === payload.id);
      if (!noteToPin) return state;
      return {
        ...state,
        important: [
          ...state.important,
          state.notes.find(({ id }) => id === payload.id),
        ],
        notes: state.notes.filter(({ id }) => id !== payload.id),
      };
    case "UNPIN":
      const noteToUnpin = state.important.find(({ id }) => id === payload.id);
      if (!noteToUnpin) return state;
      return {
        ...state,
        notes: [...state.notes, state.important.find(({ id }) => id === payload.id)],
        important: state.important.filter(({ id }) => id !== payload.id),
      };
    case "ARCHIVE":
      return {
        ...state,
        archive: [
          ...state.archive,
          state.notes.find(({ id }) => id === payload.id),
        ], // add
        notes: state.notes.filter(({ id }) => id !== payload.id), // remove
      };
    case "REMOVE_ARCHIVE":
      return {
        ...state,
        notes: [
          ...state.notes,
          state.archive.find((note) => note.id === payload.id),
        ],
        archive: state.archive.filter((note) => note.id !== payload.id),
      };
    case "ADD_TO_BIN":
      const noteToBin = state.notes.find(({ id }) => id === payload.id);
      if (!noteToBin) return state;
      return {
        ...state,
        bin: [...state.bin, state.notes.find(({ id }) => id === payload.id)],
        notes: state.notes.filter(({ id }) => id !== payload.id),
      };
    case "REMOVE_FROM_BIN":
      const noteFromBin = state.bin.find(({ id }) => id === payload.id);
      if (!noteFromBin) return state;
      return {
        ...state,
        notes: [...state.notes, state.bin.find(({ id }) => id === payload.id)],
        bin: state.bin.filter(({ id }) => id !== payload.id),
      };
    case "DELETE_FOREVER":
      return {
        ...state,
        bin: state.bin.filter(({ id }) => id !== payload.id),
      };
    default:
      return state;
  }
};
