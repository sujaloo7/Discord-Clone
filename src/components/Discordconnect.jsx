import React from 'react'
import connect from "../images/connection.svg";

const Discordconnect = () => {
  return (
   <>
    <div className="container-fluid content-section mt-5 p-5 bg-light">
    <div className="row">
      
        <div className="col-sm-5">
            <h1>Where hanging out is easy</h1>
            <p>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
        </div>
        <div className="col-sm-7 text-center">
            <img src={connect} alt="" />
        </div>
    </div>
   </div>
   </>
  )
}

export default Discordconnect