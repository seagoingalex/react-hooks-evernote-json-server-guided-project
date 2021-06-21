import React, { useState, useEffect } from "react";
// Try the useHistory on the cancel button
import { useHistory, useParams, Link } from 'react-router-dom'

function NoteEditor({ note, toggleEditMode, noteParam, setNote, isLoaded, setIsLoaded}) {
  const [noteParamEdit, setNoteEdit] = useState(null);
  const [isLoadedEdit, setIsLoadedEdit] = useState(false)
  const [noteTitle, setNoteTitle] = useState(null)
  const [noteBody, setNoteBody] = useState(null)

  
  // Comment out history for now, and circle back. Get Link attempt to work 
  const history = useHistory();

  function handleBack() {
    history.goBack()
  }

    // Param attempt with useEffect)
    // const id = useParams().id
    const { id } = useParams()

    useEffect(() => {
      fetch(`http://localhost:3000/notes/${id}`)
        .then((r) => r.json())
        .then((note) => {
          setNoteEdit(note);
          setNoteTitle(note.title)
          setNoteBody(note.body)
          setIsLoadedEdit(true);
        });
    }, [id]);


  
    if (!isLoadedEdit) return <h2>Loading...</h2>
 

  const handleNoteSubmit = (e) => {
    e.preventDefault()
    let editedNote = {
      userId: noteParamEdit.userId,
      title: noteTitle,
      body: noteBody
    }
    fetch(`http://localhost:3000/notes/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(editedNote),
    })
    note.title = noteTitle
    note.body = noteBody
    history.push(`/note/view/${id}`)

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
        {/* <Link className="input"  className="button" type="submit" value="Save" onClick={(e) => handleNoteSubmit(e)} /> */}
        <input className="button" type="submit" value="Save" onClick={(e) => handleNoteSubmit(e)} />
        {/* <Link className="button" to={`/note/view/${id}`} >Cancel</Link> */}
        <button onClick={handleBack} type="button">Cancel</button>
        {/* <button onClick={handleNoteCancel} type="button">Cancel</button> */}
      </div>
    </form>
  );
}

export default NoteEditor;
