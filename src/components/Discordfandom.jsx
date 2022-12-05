import React from 'react'
import fandom from "../images/fandom.svg";

const Discordfandom = () => {
  return (
    <>
     <div className="container-fluid content-section mt-5 p-5 ">
    <div className="row">
    <div className="col-sm-7 text-center">
            <img src={fandom} alt="" />
        </div>
        <div className="col-sm-5">
            <h1>From few to a fandom</h1>
            <p>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
        </div>
       
    </div>
   </div>
    </>
  )
}

export default Discordfandom