// Require or import the counter module
import React from "react";
import ReactDOM, { render } from "react-dom";
import Home from '../counter';

window.onload = function() {
  ReactDOM.render(
    <Home />, document.getElementById("react-root"));
};

