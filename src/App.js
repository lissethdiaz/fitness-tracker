import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import NavTabs from './components/NavTabs'
import Goals from './pages/Goals'
import History from './pages/History'
import Login from './components/Login'
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
            <Routes>
              <Route path="/" element={Signup} />
              <Route exact path ="/login">{Login}</Route>
            </Routes>
           
                  {/* <Signup/> */}

            <Footer/>
            </div>
          </Router>
      );
    };
export default App