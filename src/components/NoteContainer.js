import React, { useState, useEffect } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Header from "./Content";

/* Import Route and Switch properties from react-router dom.
 The former allows assigned routing to varying components 
model parent/child branch behavior as a sitemap, while
the former allow us the assignment itself. */
// Tip: don't forget to run npm install react-router dom !
import { Route, Switch } from 'react-router-dom'

// and don't forget, we need these hooks to frogleap Content!
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

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
      <div className="app">
      <Search setSearch={setSearch} searchTerm={searchTerm} />
      <div className="container">
        <Sidebar notesArray={notesToDisplay} onClickSidebarNote={onClickSidebarNote} setNotesArray={setNotesArray}/>
        
        {/* Hide content component temporarily */}
        <Content isEditMode={isEditMode} toggleEditMode={toggleEditMode} presentationNote={presentationNote} isPresentationMode={isPresentationMode}/>
      </div>
      </div>
    </>
  );
}

export default NoteContainer;
