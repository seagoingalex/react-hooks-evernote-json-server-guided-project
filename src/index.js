import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/brooke.css";
import App from "./components/App";

//Import the Router property from react-router-dom
import {BrowserRouter as Router } from 'react-router-dom'

// Switched out App for NoteContainer to test results...
import NoteContainer from "./components/App";

ReactDOM.render (
    <Router>
        <App />
    </Router>
    , document.getElementById("root"));
