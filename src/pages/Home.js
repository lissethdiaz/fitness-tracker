import React from 'react'

export const CModal = () => {
    const [showCModal, setShowCModal] = useState(false);
    return (
      <>
        <button className="" type="button" onClick={() => setShowCModal(true)}>
          Cardio
        </button>
        {showCModal ? (
          <>
            <form>
                <h3 className="text-3xl font=semibold">Cardio</h3>
                <button className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full" type="button" onClick={() => setShowCModal(false)}>
                    x
                </button>
                    <div className="form-group">
                        <label>Distance</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Time</label>
                        <input type="text" className="form-control"/>
                    </div>
                <button className="btn btn-dark btn-lg btn-block" type="submit" onClick={() => setShowCModal(false)}>
                    Add Workout
                </button>
            </form>
          </>
        ) : null}
      </>
    );
  };


  export const RModal = () => {
    const [showRModal, setShowRModal] = useState(false);
    return (
      <>
        <button
          className="" type="button" onClick={() => setShowRModal(true)}>
          Resistance
        </button>
        {showRModal ? (
          <>
            <form>
                <h3 className="text-3xl font=semibold">Resistance</h3>
                <button className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full" type="button" onClick={() => setShowRModal(false)}>
                    x
                </button>
                    <div className="form-group">
                        <label>Weight</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Sets</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Reps</label>
                        <input type="text" className="form-control"/>
                    </div>
                <button className="btn btn-dark btn-lg btn-block" type="submit" onClick={() => setShowRModal(false)}>
                    Add Workout
                </button>
            </form>
          </>
        ) : null}
      </>
    );
  };