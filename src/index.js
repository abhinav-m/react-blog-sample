import React from "react";
import ReactDom from "react-dom";

import { combineReducers, createStore } from "redux";

const HelloWorldApp = props => <div>Hello world 2</div>;

ReactDom.render(<HelloWorldApp />, document.getElementById("root"));
