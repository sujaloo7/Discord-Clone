import React, { useEffect }  from 'react'
import { Link } from 'react-router-dom';
import code from "../images/qrcode.PNG";
import AOS from "aos";
import "aos/dist/aos.css";

const Login = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
        AOS.refresh();
    } , []);
  return (
    <>
    <div className="container-fluid login-wrapper">
        <div className="row p-5">
<div className="col-sm-8 mt-5 ms-auto me-auto p-5" style={{backgroundColor:"#36393f" , borderRadius:"10px"}} data-aos="fade-in">
<div className="row">
    <div className="col-sm-7">
        <h1>Welcome back!</h1>
        <p>We're so excited to see you again!</p>

        <form action="">
            <div className="mb-3">
                <label htmlFor="">Email or Phone Number <span className='text-danger'>*</span> </label>
                <input type="tel" maxLength={10} className='form-control '  required />
            </div>
            <div className="mb-3">
                <label htmlFor="">Password <span className='text-danger'>*</span></label>
                <input type="password" className='form-control ' required  />
                <Link className='text-decoration-none' style={{fontSize:"14px" , color:"#5865f2"}}>Forgot Your Password?</Link>
            </div>
            <button className='btn'>Log In</button>
            <small>Need an account? <Link className='text-decoration-none' to="/register" style={{fontSize:"14px" , color:"#5865f2"}}>Register</Link></small>
        </form>

    </div>
    <div className="col-sm-5 text-center p-4">
        <img src={code} height="150" alt="" />
        <h1 className='mt-3'>Log in with Qr <br></br>code</h1>
        <p>Scan this with the <span className='fw-bold' style={{color:"#5865f2"}}> Discord mobile app </span> to log in instantly</p>
    </div>
</div>
</div>
        </div>
    </div>
    </>
  )
}

export default Login