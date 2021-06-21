import React, { useState } from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

/* Import Route and Switch properties from react-router dom.
 The former allows assigned routing to varying components 
model parent/child branch behavior as a sitemap, while
the former allow us the assignment itself. */
// Tip: don't forget to run npm install react-router dom !
import { Route, Switch } from 'react-router-dom'

function Content({ presentationNote, isPresentationMode, toggleEditMode, isEditMode }) {
 
  const onClickEditNote = () => {
    console.log(isEditMode)
    toggleEditMode(true)
  }


  // Gonna try setting project logic 
  const [noteParam, setNote] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false)

  const getContent = () => {
    if (isEditMode) {
      return <NoteEditor note={presentationNote} toggleEditMode={toggleEditMode}/>;
    } else if (isPresentationMode) {
      return <NoteViewer note={presentationNote} onClickEditNote={onClickEditNote} />;
    } else {
      return <Instructions />;
    }
  };

  return (
    <>
      <div className="master-detail-element detail">
      <Switch>
          {/* <Route exact path="/" component={() => <Instructions /> }  /> */}
          <Route path="/note/view/:id" component={() => <NoteViewer note={noteParam} onClickEditNote={onClickEditNote} noteParam={noteParam} setNote={setNote} isLoaded={isLoaded} setIsLoaded={setIsLoaded}/> } />
          <Route path="/note/edit/:id" omponent={() => <NoteEditor note={noteParam} toggleEditMode={toggleEditMode} noteParam={noteParam} setNote={setNote} isLoaded={isLoaded} setIsLoaded={setIsLoaded}/> } />
          
      </Switch>
      <Instructions />
        {/* Before the switch statement >> {getContent()} */}
      </div>;
    </>
  )
}

export default Content;
