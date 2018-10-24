import React from "react";
import ReactDom from "react-dom";
import { Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import blogsReducer from "../src/reducers";
import Home from "./components/Home";

import BlogList from "./components/BlogList";

import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({ blogs: blogsReducer });

const store = createStore(rootReducer);

const App = props => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Home} />
    </Router>
  </Provider>
);

ReactDom.render(<App />, document.getElementById("root"));
