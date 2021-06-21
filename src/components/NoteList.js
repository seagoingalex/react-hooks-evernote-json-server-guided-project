import React from "react";
import NoteItem from "./NoteItem";

function NoteList( {notesArray, onClickSidebarNote} ) {
  return (
    <ul>
      {notesArray.map(note => <NoteItem key={note.id} note={note} onClickSidebarNote={onClickSidebarNote}/>)}
      {/* <NoteItem /> */}
    </ul>
  );
}

export default NoteList;
