import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/discord.png'

const Footer = () => {
  return (
    <>
    <div className="container-fluid footer p-5 mt-5">
        <div className="row">
            <div className="col-sm-3">
                <h1>IMAGINE A PLACE</h1>

                <i class="fa-brands fa-twitter text-light "></i><i class="fa-brands fa-instagram text-light"></i><i class="fa-brands fa-square-facebook text-light"></i><i class="fa-brands fa-youtube text-light"></i>
            </div>
            <div className="col-sm-9">
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className='ms-4'>Product</h6>
                        <ul>
                            <li className='nav-item mb-2'>
                            <Link className='text-decoration-none text-light '>Download</Link>
                          
                            </li>
                            <li className='nav-item mb-2'>
                            <Link  className='text-decoration-none text-light'>Nitro</Link>
                          
                            </li>
                            <li className='nav-item mb-2'>
                            <Link  className='text-decoration-none text-light'>Status</Link>
                          
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                    <h6 className='ms-4'>Company</h6>
                        <ul>
                            <li className='nav-item mb-2'>
                            <Link  className='text-decoration-none text-light'>About</Link>
                          
                            </li>
                            <li className='nav-item mb-2'>
                            <Link  className='text-decoration-none text-light'>Jobs</Link>
                          
                            </li>
                            <li className='nav-item mb-2'>
                            <Link  className='text-decoration-none text-light'>Brandings</Link>
                          
                            </li>
                            <li className='nav-item mb-2'>
                            <Link  className='text-decoration-none text-light'>Newsroom</Link>
                          
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                    <h6 className='ms-4'>Resources</h6>
                        <ul>
                            <li className='nav-item mb-2'>
                            <Link  className='text-decoration-none text-light'>Collage</Link>
                          
                            </li>
                            <li className='nav-item mb-2'>
                            <Link  className='text-decoration-none text-light'>Support</Link>
                          
                            </li>
                            <li className='nav-item mb-2'>
                            <Link  className='text-decoration-none text-light'>Safety</Link>
                          
                            </li>
                            <li className='nav-item mb-2'>
                            <Link  className='text-decoration-none text-light'>Blog</Link>
                          
                            </li>
                            <li className='nav-item mb-2'>
                            <Link  className='text-decoration-none text-light'>Feedback</Link>
                          
                            </li>
                            <li className='nav-item mb-2'>
                            <Link  className='text-decoration-none text-light'>Developers</Link>
                          
                            </li>
                            <li className='nav-item mb-2'>
                            <Link  className='text-decoration-none text-light'>Streamkit</Link>
                          
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                    <h6 className='ms-4'>Policies</h6>
                        <ul>
                            <li className='nav-item mb-2'>
                            <Link  className='text-decoration-none text-light'>Terms</Link>
                          
                            </li>
                            <li className='nav-item mb-2'>
                            <Link  className='text-decoration-none text-light'>Privacy</Link>
                          
                            </li>
                            <li className='nav-item mb-2'>
                            <Link  className='text-decoration-none text-light'>Cookies Settings</Link>
                          
                            </li>
                            <li className='nav-item mb-2'>
                            <Link  className='text-decoration-none text-light'>Guidelines</Link>
                          
                            </li>
                            <li className='nav-item mb-2'>
                            <Link  className='text-decoration-none text-light'>Acknowledgements</Link>
                          
                            </li>
                            <li className='nav-item mb-2'>
                            <Link  className='text-decoration-none text-light'>Licenses</Link>
                          
                            </li>
                            <li className='nav-item mb-2'>
                                <Link  className='text-decoration-none text-light'>Moderation</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="botton-footer conatiner">
            <div className="row">
                <div className="col-sm-4 mt-5">
                <img src={logo} height="30" alt="" />
                </div>
                <div className="col-sm-4 ms-auto text-end mt-5">
                    <button className='btn text-light'>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer