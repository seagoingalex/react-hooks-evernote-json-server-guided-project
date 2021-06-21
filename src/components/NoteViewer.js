import React from "react";

function NoteViewer({ note, onClickEditNote }) {
  return (
    <>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <button onClick={onClickEditNote}>Edit</button>
    </>
  );
}

export default NoteViewer;
