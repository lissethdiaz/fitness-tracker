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


export const Modal = () => {
    const [showModal, setShowModal] = useState(false);
    return (
      <>
          <button className="bg-blue-200 text-black active:bg-blue-500 font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" onClick={() => setShowModal(true)}>
          + Add New Exercise
        </button>
        {showModal ? (
          <>
        <div className="flex  justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <button className="bg-transparent border-0 text-black float-right" onClick={() => setShowModal(false)}>
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      Exercise Name
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  {/*Make this add the new exercise to an exerciseItem array on submit*/}
                  <button className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="submit" onClick={() => setShowModal(false)}>
                    Add Exercise
                  </button>
                </div>
              </div>
            </div>
          </div>
          </>
        ) : null}
      </>
    );
  };

  
export default Track
//export the exerciseItem array