import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import NavTabs from './components/NavTabs'
import Goals from './pages/Goals'
import History from './pages/History'
import Login from './components/Login'
import Track from './components/Track'
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
              <Route path="/"element={<Signup/>} />
              <Route path ="/login" element = {<Login/>}/>
              <Route path ="/track" element = {<Track/>}/>
              <Route path ="/history" element = {<History/>}/>
              <Route path ="/goals" element = {<Goals/>}/>
            </Routes>
           
                  {/* <Signup/> */}

            <Footer/>
            </div>
          </Router>
      );
    };
export default App