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

  const [noteParamView, setNoteView] = useState(null);
  const [isLoadedView, setIsLoadedView] = useState(false)


  // Param attempt with useEffect)
  // const id = useParams().id
  const { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:3000/notes/${id}`)
      .then((r) => r.json())
      .then((note) => {
        setNoteView(note);
        // setNote(note)
        setIsLoadedView(true);
      });
  }, [id]);

  if (!isLoadedView) return <h2>Loading...</h2>

  console.log(note)

  return (
    <>
      <h2>{noteParamView.title}</h2>
      <p>{noteParamView.body}</p>
      <Link className="button" to={`/note/edit/${id}`}>Edit</Link>
      {/* <button onClick={onClickEditNote}>Edit</button> */}
    </>
  );
}

export default NoteViewer;
