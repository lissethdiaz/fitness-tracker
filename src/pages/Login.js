import React from 'react'
import {useNavigate} from 'react-router-dom'
import NavTabs from '../components/NavTabs'
import Signup from './Signup'


function Login({isLoggedIn,toggleLogin}) {
  const history = useNavigate()
  
  function handleClick() {
    toggleLogin()
    if (!isLoggedIn) {
      history.push('/');
    }
  }

  // function signUp() {
  //     toggleLogin()
  //     if (!isLoggedIn) {
  //         {Signup}
  //     }
  // }

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
            {/* <button type='button' className='btn' onClick={signUp}>
                No account? Create one!
            </button> */}
        
      </main>
    </div>
  )
}

export default Login