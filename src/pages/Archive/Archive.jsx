import React from "react";
import { Fragment } from "react";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import { useNotes } from "../../contexts/notes-context";
import NoteCard from "../../components/NoteCard/NoteCard";

function Archive() {

  const {archive} = useNotes();

  return (
    <>
      <>
        <Fragment>
          <NavBar />
          <main className="flex gap-3">
            <SideBar />
            <div className="flex-1">
              {archive?.length > 0 && (
                <div className="font-bold p-2">
                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {archive.map(({ id, title, text, isPinned }) => (
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
          </main>
        </Fragment>
      </>
    </>
  );
}

export default Archive;
