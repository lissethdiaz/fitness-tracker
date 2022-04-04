import React, {useState} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import NavTabs from './components/NavTabs'
import Goals from './pages/Goals'
import History from './pages/History'
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Footer from './components/Footer'
import Header from './components/Header';
import './index.css';


    function App() {
      return (
          <Router>
            <div className="flex-column justify-flex-start min-100-vh">
     
              <div className="container">
                  <Login/>

              </div>
          
            </div>
          </Router>
      );
    };
export default App