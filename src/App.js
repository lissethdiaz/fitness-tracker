import React, {useState} from 'react';
import {Routes,Route, Navigate} from 'react-router-dom';
import './App.css';
import NavTabs from './components/NavTabs'
import Goals from './pages/Goals'
import History from './pages/History'
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Footer from './components/Footer'

function App() {
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    
    const api = async () => {
      const response =  await fetch('./api/....')
      const data = await response.json()
      console.log(data);
    } 
  
    const toggleLogin = () => {
      setIsLoggedIn(prevState => prevState === true ? false : true)
    }

    return (
      <div className="App">
          <Routes>
            <Route exact path='/' component={Login} /> 
        
            </Routes>
  
        <Footer></Footer>
      </div>
  );
}

export default App
