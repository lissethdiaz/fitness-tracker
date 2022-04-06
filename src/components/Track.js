import React, {useState} from 'react'
//import {Link} from 'react-router-dom'
import { CModal } from './CModal'
import { RModal } from './RModal';
//import { RModal } from './RModal'

const Track = () => {
   
    return ( <>
        <h3 className='flex justify-center items-center h-24 font-josefin-sans font-bold text-5xl bg-blue-200'>Choose your workout</h3>
        <div className='h-screen flex justify-center items-center bg-slate-200'>
            
            {<CModal/>}
            {<RModal/>}


        </div>

 
        {/*<Link to='/track' component={CModal} />
        <Link to='/track' component={RModal} />*/}


  </>);
}
export default Track