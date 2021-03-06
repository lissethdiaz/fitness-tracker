import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavTabs extends Component {

  render() {
    return (
     
      <nav className="navbar flex flex-row justify-center items-center h-24"> 
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto flex justify-center items-center space-x-8 font-josefin-sans font-bold">
          <li className="navbar-item">
          <Link to="/track" className="nav-link transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-blue-100 duration-300 rounded ">Track</Link>
          </li>
          <li className="navbar-item">
          <Link to="/history" className="nav-link transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-blue-100 duration-300 rounded">History</Link>
          </li>
          <li className="navbar-item">
          <Link to="/goals" className="nav-link transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-blue-100 duration-300 rounded">Goals</Link>
          </li>
          <li className="navbar-item">
          <Link to="/login" className="nav-link transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-blue-100 duration-300 rounded ">Login</Link>
          </li>
          <li className='navbar-item'>
          <Link to='/login '  className="nav-link transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-blue-100 duration-300 rounded ">Logout</Link>
          </li>
        </ul>
        </div>
       
      </nav>
   
    );
  }
}