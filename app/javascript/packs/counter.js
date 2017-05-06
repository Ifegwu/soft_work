// Require or import the counter module
import React from 'react';
import ReactDOM, { render } from 'react-dom';
//import { BrowserRouter as Router, Route } from 'react-router-dom';        
//import Home from '../counter';
import Routes from '../config/routes';
//hot reload config
import WebpackerReact from 'webpacker-react/hmr';


window.onload = function() {
  ReactDOM.render(
    <Routes />,
    document.getElementById('react-root')
  );
};

