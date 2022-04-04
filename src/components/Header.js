import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <Link to='/' className='container   flex justify-center items-center text-5xl font-bold tracking-wide text-center shadow-lg h-16 font-josefin-sans bg-red-200'>
      <h5 className='transition ease-in-out delay-150 bg-gray-900hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 duration-300 rounded flex justify-center items-center h-16'>Fit don't Quit</h5>
 </Link>
  )
}

export default Header