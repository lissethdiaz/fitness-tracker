import React, {useState} from 'react';
import {Routes,Route, Navigate} from 'react-router-dom';
import './App.css';
import NavTabs from './components/NavTabs';
import Goals from './pages/Goals';
import History from './pages/History';
import Login from './pages/Login';
import Home from './pages/Home'


//function App() {
  function App() {

    useEffect(() => {
      window.process = {
        ...window.process,
      };
    }, []);
    const [isLoggedIn,setIsLoggedIn] = useState(false)
  
    const toggleLogin = () => {
      setIsLoggedIn(prevState => prevState === true ? false : true)
    }
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
      if (currentPage === 'Home') {
        return <Home />;
      }
      if (currentPage === 'History') {
        return <History />;
      }
      return <Goals />;
    };
    const handlePageChange = (page) => setCurrentPage(page);

    return (
      <div className="App">
        <NavTabs isLoggedIn={isLoggedIn} currentPage={currentPage} handlePageChange={handlePageChange}/>
        {renderPage()}
        <div className='container'>
          {/* App routing Routes goes here :) */}
          <Routes>
            <Route exact path='/'>
              <Login isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
            </Route>
            { <Route exact path='/home'>
              {isLoggedIn ? <Home /> : <Navigate to='/' />}
            </Route> }
            <Route exact path='/history'>
              {isLoggedIn ? <History /> : <Navigate to='/' />}
            </Route>
            <Route exact path='/goals'>
              {isLoggedIn?<Goals /> : <Navigate to='/'/>}
            </Route> 
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
  );
}
//}
export default App
