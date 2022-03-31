import React, {useState} from 'react';
import {Switch,Route, Redirect} from 'react-router-dom';
import './App.css';
import NavTabs from './components/NavTabs';
import Goals from './pages/Goals';
import History from './pages/History';
import Login from './pages/Login';


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
        <div className='container'>
          {/* App routing switch goes here :) */}
          <Switch>
            <Route path='/'>
              <Login isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
                <Route path=':signup'>
                  {isLoggedIn ? <Signup /> : <Redirect to=':signup' />}
                </Route>
            </Route>
            <Route path='/home'>
              {isLoggedIn ? <Home /> : <Redirect to='/' />}
            </Route>
            <Route  path='/history'>
              {isLoggedIn ? <History /> : <Redirect to='/' />}
            </Route>
            <Route  path='/goals'>
              {isLoggedIn?<Goals /> : <Redirect to='/'/>}
            </Route> 
          </Switch>
        </div>
        <Footer />
      </div>
  );
}

export default App
