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

import Login from '../src/components/Login';
import SignUp from '../src/components/Signup';

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

  return (
    <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            </Switch>
          </div>
        
      </div>
    </Router>
  );
}

export default App;
