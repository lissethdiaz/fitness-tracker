import React, {useState} from 'react';
import {Routes,Route, Navigate} from 'react-router-dom';
import './App.css';
import NavTabs from './components/NavTabs'
import Goals from './pages/Goals'
import History from './pages/History'
import LoginPage from './pages/Login'
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
        <NavTabs isLoggedIn={isLoggedIn} />
        <LoginPage isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
        <div className='container bg-black'>
          {/* App routing goes here :) */}
          <Routes>
            <Route path='/'> {isLoggedIn ? <LoginPage/> : <Navigate to='/' />}
                <Route path=':signup'> {isLoggedIn ? <Signup /> : <Navigate to=':signup' />}
                </Route>
            </Route>
            <Route path='/home'>{isLoggedIn ? <Home /> : <Navigate to='/' />}
            </Route>
            <Route  path='/history'>{isLoggedIn ? <History /> : <Navigate to='/' />}
            </Route>
            <Route  path='/goals'>{isLoggedIn?<Goals /> : <Navigate to='/'/>}
            </Route> 
          </Routes>
        </div>
        <Footer></Footer>
      </div>
  );
}

export default App
