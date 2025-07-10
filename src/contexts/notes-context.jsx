import { createContext, useContext, useReducer, useEffect } from "react";
import { noteReducer } from "../reducers/noteReducer";

const NotesContext = createContext();

// 1️⃣ Load notes and archive from localStorage (if available)
const getInitialState = () => {
  const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
  const savedArchive = JSON.parse(localStorage.getItem("archive")) || [];
  const savedBin = JSON.parse(localStorage.getItem("bin")) || [];
  const savedImp = JSON.parse(localStorage.getItem("important")) || [];
  return {
    title: "",
    text: "",
    notes: savedNotes,
    archive: savedArchive,
    bin: savedBin,
    important: savedImp,
  };
};

const NotesProvider = ({ children }) => {
  // 2️⃣ Use loaded state from localStorage as initial state
  const [state, noteDispatch] = useReducer(noteReducer, {}, getInitialState);
  const { title, text, notes, archive ,bin , important} = state;

  // 3️⃣ Save notes and archive to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("archive", JSON.stringify(archive));
    localStorage.setItem("bin", JSON.stringify(bin));
    localStorage.setItem("bin", JSON.stringify(important));
  }, [notes, archive , bin , important]);

  return (
    <NotesContext.Provider
      value={{ title, text, notes, archive, bin , important,noteDispatch }}
    >
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { useNotes, NotesProvider };
