//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import {BrowserRouter as Router} from 'react-router-dom';

//ReactDOM.render(
//  <Router>
//      <App />
//  </Router>,
//  document.getElementById('root')
//);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
