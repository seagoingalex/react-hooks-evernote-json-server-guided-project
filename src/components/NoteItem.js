import React from "react";

import { Link } from 'react-router-dom';

function NoteItem({ note, onClickSidebarNote }) {
  
/* Temporarily dismantling the handleSideBarClick while working on the router Link
  const handleSidebarClick = () => {
    onClickSidebarNote(note)
  }
     <li onClick={handleSidebarClick}> */
  
  return (
    <Link to={`/note/view/${note.id}`}>
    <li>
      <h2>{note.title}</h2>
      {/* Is there another way to truncate the caption other than slice? */}
      <p>{note.body.slice(0,21)}...</p>
    </li>
    </Link>
  );
}

export default NoteItem;
