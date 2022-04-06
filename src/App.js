import React, {useState} from 'react';
import { Router, Route} from 'react-router-dom';
import './App.css';
import NavTabs from './components/NavTabs'
import Goals from './pages/Goals'
import History from './pages/History'
import {Login} from './components/Login'
import Track from './components/Track'
import {Signup} from './components/Signup'
import Footer from './components/Footer'
import Header from './components/Header';
import './index.css';
import { history } from './helpers';
import { authenticationService } from './services';
import { PrivateRoute } from './components/PrivateRoute';
import { Switch } from 'react-router-dom';

class App extends React.Component {

      constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        };
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
    }

    logout() {
        authenticationService.logout();
        history.push('/');
    }
    render() {
      const { currentUser } = this.state;
      return (
          <Router history={ history }>
            <div className='container'>
            <Header/>
            <NavTabs/>
         
            <Switch>
              <Route path="/"element={<Signup/>} />
              <Route path ="/login" element = {<Login/>}/>
              <Route path ="/track" element = {<Track/>}/>
              <Route path ="/history" element = {<History/>}/>
              <Route path ="/goals" element = {<Goals/>}/>
            </Switch>  
           
           
                  {/* <Signup/> */}

            <Footer/>
            </div>
          </Router>
      );
    }
  }
  export { App };
