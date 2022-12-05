import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

const Register = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
        AOS.refresh();
    } , []);
  return (
   <>
   <div className="container-fluid register-wrapper">
    <div className="row">
        <div className="col-sm-4 p-4 ms-auto me-auto mt-4"  style={{backgroundColor:"#36393f" , borderRadius:"10px"}} data-aos="fade-in">
<h1>Create an account</h1>
<form action="">
            <div className="mb-3">
                <label htmlFor="">EMAIL  <span className='text-danger'>*</span> </label>
                <input type="email" className='form-control '  required />
            </div>
            <div className="mb-3">
                <label htmlFor="">USERNAME <span className='text-danger'>*</span></label>
                <input type="text" className='form-control ' required  />
              
            </div>
            <div className="mb-3">
                <label htmlFor="">Password <span className='text-danger'>*</span></label>
                <input type="password" className='form-control ' required  />
            </div>
            <div className="row">
                <label htmlFor="">Date of birth</label>
                <div className="col-sm-4">
                    <select className='form-select mb-2'>
                        <option value="">Month</option>
                    <option value="">January </option>
                    <option value="">February </option>
                    <option value="">March </option>
                    <option value="">April </option>
                    <option value="">May </option>
                    <option value="">June </option>
                    <option value="">July </option>
                    <option value="">August </option>
                    <option value="">September </option>
                    <option value="">October </option>
                    <option value="">November </option>
                    <option value="">December </option>

                    </select>
                </div>
                <div className="col-sm-4">
                    <select className='form-select mb-2'>
                        <option value="">Date</option>
                    <option value="">1 </option>
                    <option value="">2 </option>
                    <option value="">3 </option>
                    <option value="">4 </option>
                    <option value="">5 </option>
                    <option value="">6 </option>
                    <option value="">7 </option>
                    <option value="">8 </option>
                    <option value="">9 </option>
                    <option value="">10 </option>
                    <option value="">11 </option>
                    <option value="">12 </option>
                    <option value="">13 </option>
                    <option value="">14 </option>
                    <option value="">15 </option>
                    <option value="">16 </option>
                    <option value="">17 </option>
                    <option value="">18 </option>
                    <option value="">19 </option>
                    <option value="">20 </option>
                    <option value="">21 </option>
                    <option value="">22 </option>
                    <option value="">23 </option>
                    <option value="">24 </option>
                    <option value="">25 </option>
                    <option value="">26 </option>
                    <option value="">27 </option>
                    <option value="">28 </option>
                    <option value="">29 </option>
                    <option value="">30 </option>
                    <option value="">31</option>
                    

                    </select>
                </div>
               
                <div className="col-sm-4">
                <select className='form-select mb-2' >
                    <option value="">Year</option>
                    <option value="">2000 </option>
                    <option value="">2001 </option>
                    <option value="">2002 </option>
                    <option value="">2003 </option>
                    <option value="">2004 </option>
                    <option value="">2005 </option>
                    <option value="">2006 </option>
                    <option value="">2007 </option>
                    <option value="">2008 </option>
                    <option value="">2009 </option>
                    <option value="">2010 </option>
                    <option value="">2011 </option>
                    <option value="">2012 </option>
                    <option value="">2013 </option>
                    <option value="">2014 </option>
                    <option value="">2015 </option>
                    <option value="">2016 </option>
                    <option value="">2017 </option>
                    <option value="">2018</option>
                    <option value="">2019 </option>
                    <option value="">2020 </option>
                    <option value="">2021 </option>
                    <option value="">2022 </option>
                    </select>
                </div>
            </div>
            <p><input type="checkbox" />&nbsp;(Optional) It’s okay to send me emails with Discord updates, tips, and special offers. You can opt out at any time.</p>
            <button className='btn'>Continue</button>
            <small className='' style={{color:"#B9BBBE"}}>Alreay Have account? <Link className='text-decoration-none' to="/login" style={{fontSize:"14px" , color:"#5865f2"}}>Login</Link></small>
<br></br><br></br>
            <small className='text-center' style={{color:"#B9BBBE" , fontSize:"11px"}}>By registering, you agree to Discord's <Link className='text-decoration-none' style={{fontSize:"14px" , color:"#5865f2"}}>Terms of Service</Link> and <Link className='text-decoration-none' style={{fontSize:"14px" , color:"#5865f2"}}>Privacy Policy</Link></small>
        </form>
        </div>
    </div>
   </div>
   </>
  )
}

export default Register