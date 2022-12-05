import React from 'react'

const Hero = () => {
  return (
   <>
   <div className="container-fluid hero-wrapper">
<div className="col-sm-6 ms-auto me-auto pt-5">
    <h1 className='fw-bold pt-5' style={{fontSize:"56px"}}>IMAGINE A PLACE...</h1>
    <p className='text-light  text-center'>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
    <button className='btn bg-white px-5 m-1 mt-3 '> <i className='fa fa-download'></i> Download for Windows</button>
    <button className='btn bg-dark text-light px-5 m-1 mt-3'>Open Discord in your browser</button>

    </div>
   </div>
   </>
  )
}
 
export default Hero