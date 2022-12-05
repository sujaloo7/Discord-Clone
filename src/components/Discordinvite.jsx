import React from 'react'
import invite from "../images/invite.svg";
const Discordinvite = () => {
  return (
   <>
   <div className="container-fluid content-section mt-5 p-5">
    <div className="row">
        <div className="col-sm-7 text-center">
            <img src={invite} alt="" />
        </div>
        <div className="col-sm-5">
            <h1>Create an invite-only  place where you belong</h1>
            <p>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
        </div>
    </div>
   </div>
   </>
  )
}

export default Discordinvite