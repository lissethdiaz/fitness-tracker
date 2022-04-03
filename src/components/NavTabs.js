import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#history"
            onClick={() => handlePageChange('History')}
            className={currentPage === 'History' ? 'nav-link active' : 'nav-link'}
          >
            History
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#goals"
            onClick={() => handlePageChange('Goals')}
            className={currentPage === 'Goals' ? 'nav-link active' : 'nav-link'}
          >
            Goals
          </a>
        </li>
      </ul>
    );
  }
  
  export default NavTabs;