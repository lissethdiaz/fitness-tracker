import React from 'react'
import ReactDOM from 'react-domgi'
import {useNavigate, Outlet} from 'react-router-dom'
import NavTabs from '../components/NavTabs'
import Signup from './Signup'


function LoginPage({isLoggedIn,toggleLogin}) {
  const navigate = useNavigate()
  
  function handleClick() {
    toggleLogin()
    if (!isLoggedIn) {
      navigate.push('/signup');
    }
  }



  return (
    <div className='container'>
      <NavTabs 
        pageTitle={isLoggedIn ? "Log Out" : "Login"} 
        pageIntroText={"Welcome to your Fitness Tracker. Please log in to continue."}
      />
      <main className='container'>
        {isLoggedIn ?  
            <button type="button" className="btn" onClick={handleClick}>
              Log Out
            </button>
            : 
            <button type="button" className="btn" onClick={handleClick}>
              Log In
            </button>
            }
            <button type='button' className='btn' onClick={Signup}>
                No account? Create one!
            </button>
        <Outlet></Outlet>
      </main>
    </div>
  )
}

export default LoginPage