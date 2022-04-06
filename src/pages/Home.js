import React from 'react'

export const CModal = () => {
    const [showCModal, setShowCModal] = useState(false);
    return (
      <>
        <button className="bg-blue-200 text-black active:bg-blue-500 font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" onClick={() => setShowCModal(true)}>
          Cardio
        </button>
        {showCModal ? (
          <>
        <div className="flex  justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Cardio</h3>
                  <button className="bg-transparent border-0 text-black float-right" onClick={() => setShowCModal(false)}>
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      Distance
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      Time
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="submit" onClick={() => setShowCModal(false)}>
                    Add Workout
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


  export const RModal = () => {
    const [showRModal, setShowRModal] = useState(false);
    return (
      <>
               <button className="bg-blue-200 text-black active:bg-blue-500 font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" onClick={() => setShowRModal(true)}>
          Resistance
        </button>
        {showRModal ? (
          <>
        <div className="flex  justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Resistance</h3>
                  <button className="bg-transparent border-0 text-black float-right" onClick={() => setShowRModal(false)}>
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      Weight
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      Sets
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      Reps
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="submit" onClick={() => setShowRModal(false)}>
                    Add Workout
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
