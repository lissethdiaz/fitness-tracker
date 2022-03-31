import React, {useState} from 'react';
import {Switch,Route, Redirect} from 'react-router-dom';
import './App.css';
import NavTabs from './components/NavTabs';
import Goals from './pages/Goals';
import History from './pages/History';
import Login from './pages/Login';


function App() {
  function App() {
    const [isLoggedIn,setIsLoggedIn] = useState(false)
  
    const toggleLogin = () => {
      setIsLoggedIn(prevState => prevState === true ? false : true)
    }

    return (
      <div className="App">
        <NavTabs isLoggedIn={isLoggedIn} />
        <div className='container'>
          {/* App routing switch goes here :) */}
          <Switch>
            <Route exact path='/'>
              <Login isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
            </Route>
            <Route exact path='/home'>
              {isLoggedIn ? <Home /> : <Redirect to='/' />}
            </Route>
            <Route exact path='/history'>
              {isLoggedIn ? <History /> : <Redirect to='/' />}
            </Route>
            <Route exact path='/goals'>
              {isLoggedIn?<Goals /> : <Redirect to='/'/>}
            </Route> 
          </Switch>
        </div>
        <Footer />
      </div>
  );
}

export default App
