import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavTabs from '../src/components/NavTabs'
import Login from '../src/components/Login';
import SignUp from '../src/components/Signup';
import Home from '../src/pages/Home'
import History from '../src/pages/History'
import Goals from '../src/pages/Goals'

function App() {
  const handlePageChange = (page) => setCurrentPage(page);
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
  return (
    <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
          {renderPage()}
          { <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            </Switch> }
          </div>
        
      </div>
    </Router>
  );
}

export default App;