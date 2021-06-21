import React from "react";
import Header from "./Header";
import NoteContainer from "./NoteContainer";

/* Import Route and Switch properties from react-router dom.
 The former allows assigned routing to varying components 
model parent/child branch behavior as a sitemap, while
the former allow us the assignment itself. */
// Tip: don't forget to run npm install react-router dom !
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Header />
      <NoteContainer />
      
    </div>
  );
}

export default App;
