import React, { useEffect, useState } from "react";

// Link to something else
import { Link } from 'react-router-dom'

// Try importing the params for a note
import { useParams } from 'react-router-dom'

function NoteViewer({ note, onClickEditNote, noteParam, setNote, isLoaded, setIsLoaded }) {
  // Gonna try setting project logic, teporarily moved this logic
  // to NoteContainer so Viewer AND Editor have access
  // const [noteParam, setNote] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false)


  // Param attempt with useEffect)
  const id = useParams().id

  useEffect(() => {
    fetch(`http://localhost:3000/notes/${id}`)
      .then((r) => r.json())
      .then((note) => {
        setNote(note);
        setIsLoaded(true);
      });
  }, [id]);

  if (!isLoaded) return <h2>Loading...</h2>

  

  return (
    <>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <Link className="button" to={`/note/edit/${id}`} onClick={onClickEditNote}>Edit</Link>
      {/* <button onClick={onClickEditNote}>Edit</button> */}
    </>
  );
}

export default NoteViewer;
