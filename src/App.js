import React, {useState} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import NavTabs from './components/NavTabs'
import Goals from './pages/Goals'
import History from './pages/History'
//import Login from './components/Login'
import Home from './pages/Home'
import Signup from './components/Signup'
import Footer from './components/Footer'
import Header from './components/Header';
import './index.css';


    function App() {
      return (
          <Router>
            <div className='container'>
            <Header/>
            <NavTabs/>
           
                  <Signup/>

            <Footer/>
            </div>
          </Router>
      );
    };
export default App