import React from "react";
import NoteList from "./NoteList";

function Sidebar({ notesArray, onClickSidebarNote, setNotesArray }) {
  
  const handleNewNote = () => {
    let newNote = {
      userId: 1,
      title: `New Note`,
      body: "Enter your notes here"
    }
    setNotesArray([...notesArray, newNote])
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(newNote),
    })
  }

  return (
    <div className="master-detail-element sidebar">
      <NoteList notesArray={notesArray} onClickSidebarNote={onClickSidebarNote} />
      <button onClick={handleNewNote}>New</button>
    </div>
  );
}

export default Sidebar;
