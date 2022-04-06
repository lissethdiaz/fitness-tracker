import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import  {render} from 'react-dom';
import './index.css';
import {App} from './App';
import { configureFakeBackend } from './helpers';
configureFakeBackend();
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
      <App />
  </Router>,
  document.getElementById('root')
);



//render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
//import React from 'react';
//import { render } from 'react-dom';

//import { App } from './App';

// setup fake backend
//import { configureFakeBackend } from './helpers';
//configureFakeBackend();

//render(
//    <App />,
//     document.getElementById('app')
//);
