import React from 'react'
import Darknavbar from '../components/Darknavbar';
import download from "../images/download.svg"; 

const Downloads = () => {
  return (
   <>
   <Darknavbar/>
   <div className="container-fluid download-wrapper">
    <div className="row p-4">
        <div className="col-sm-6">
            <h1>GET DISCORD<br></br> FOR ANY <br></br>  DEVICE</h1>
            <p>An adventure awaits. Hang out with your friends on our desktop app and keep the conversation going on mobile.</p>
        </div>
        <div className="col-sm-6 text-center mt-5">
<img src={download} alt="" className='mt-5' />
        </div>

    </div>
   </div>
   </>
  )
}

export default Downloads