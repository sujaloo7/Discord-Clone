import React from 'react';
import chillin from "../images/chillin.svg"

const Closer = () => {
  return (
    <>
    <div className="container-fluid closer mt-5 p-5 bg-light">
        <div className="row">
            <div className="col-sm-9 ms-auto me-auto text-center">
            <h1>RELIABLE TECH FOR STAYING CLOSE</h1>
            <p className='text-center'>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
            <img src={chillin} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Closer