import React, { useState } from "react";

function NoteEditor({ note, toggleEditMode }) {
  const [noteTitle, setNoteTitle] = useState(note.title)
  const [noteBody, setNoteBody] = useState(note.body)

  const handleNoteSubmit = (e) => {
    e.preventDefault()
    let editedNote = {
      userId: note.userId,
      title: noteTitle,
      body: noteBody
    }
    fetch(`http://localhost:3000/notes/${note.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(editedNote),
    })
    note.title = noteTitle
    note.body = noteBody
    toggleEditMode(false)
  }

  const handleNoteCancel = () => {
    setNoteTitle(note.title)
    setNoteBody(note.body)
    toggleEditMode(false)
  }

  return (
    <form className="note-editor">
      <input type="text" name="title" onChange={(e) => setNoteTitle(e.target.value)} value={noteTitle}/>
      <textarea name="body" onChange={(e) => setNoteBody(e.target.value)} value={noteBody}/>
      <div className="button-row">
        <input className="button" type="submit" value="Save" onClick={(e) => handleNoteSubmit(e)} />
        <button onClick={handleNoteCancel} type="button">Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
