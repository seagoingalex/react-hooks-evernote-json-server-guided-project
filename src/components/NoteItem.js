import React from "react";

function NoteItem({ note, onClickSidebarNote }) {
  

  const handleSidebarClick = () => {
    onClickSidebarNote(note)
  }
  
  return (
    <li onClick={handleSidebarClick}>
      <h2>{note.title}</h2>
      {/* Is there another way to truncate the caption other than slice? */}
      <p>{note.body.slice(0,20)}...</p>
    </li>
  );
}

export default NoteItem;
