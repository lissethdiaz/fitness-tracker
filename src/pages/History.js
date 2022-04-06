import React from "react";
import exerciseItem from "Track.js";
import workoutItem from "Track.js";

{/*Seperates the array into a list*/}
const exerciseList = exerciseItem.map((exerciseItem) =>
<li key={index}>
{exerciseItem.button}
</li>
);
const workoutList = workoutItem.map((workoutItem) =>
<li key={index}>
{workoutItem.text}
</li>
);

const History = () => {
  return(<>
  <h2>History Page</h2>
  </>)
}


export const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {/*Gives a list of buttons, each for a specific exercise, to choose from*/}
      <button className="bg-blue-200 text-black active:bg-blue-500 font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" onClick={() => setShowRModal(true)}>
        {exerciseList}
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
                {/*Gives a list of the workouts from the chosen exercises array*/}
                  <ul className="block text-black text-sm font-bold mb-1">
                  {workoutList}
                  </ul>
              </div>
            </div>
          </div>
        </div>
        </>
      ) : null}
    </>
  );
};

export const history = History;