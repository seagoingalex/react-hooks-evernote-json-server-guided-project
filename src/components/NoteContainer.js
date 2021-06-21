import React, { useState, useEffect } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [notesArray, setNotesArray] = useState([])
  const [presentationNote, selectPresentationNote] = useState("")
  const [isEditMode, toggleEditMode] = useState(false)
  const [isPresentationMode, togglePresentationMode] = useState(false)
  const [searchTerm, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/notes")
    .then(response => response.json())
    .then(notesData => setNotesArray(notesData))
  }, [])

  const onClickSidebarNote = (note) => {
    selectPresentationNote(note)
    togglePresentationMode(true)
    toggleEditMode(false)
  }

  const notesToDisplay = notesArray.filter((note) => {
    if (searchTerm === "") return true;
    return note.title.toUpperCase().includes(searchTerm.toUpperCase())
  })

  

  return (
    <>
      <Search setSearch={setSearch} searchTerm={searchTerm} />
      <div className="container">
        <Sidebar notesArray={notesToDisplay} onClickSidebarNote={onClickSidebarNote} setNotesArray={setNotesArray}/>
        <Content isEditMode={isEditMode} toggleEditMode={toggleEditMode} presentationNote={presentationNote} isPresentationMode={isPresentationMode}/>
      </div>
    </>
  );
}

export default NoteContainer;
