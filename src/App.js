import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../src/components/Login';
import SignUp from '../src/components/Signup';

function App() {

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