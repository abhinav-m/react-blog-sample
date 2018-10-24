import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import BlogList from "./components/BlogList";

import { combineReducers, createStore } from "redux";

const App = props => (
  <Router>
    <App />
  </Router>
);

ReactDom.render(<App />, document.getElementById("root"));
