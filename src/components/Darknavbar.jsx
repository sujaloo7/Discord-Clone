import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/discord.png"

const Darknavbar = () => {
  return (
   <>
    <nav class="navbar navbar-expand-lg " style={{backgroundColor:"#23272a"}}>
  <div class="container-fluid px-5 p-3">
    <Link class="navbar-brand" to="/"> <img src={logo} height="25" alt="" /> </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link fw-bold" aria-current="page" to="/download">Download</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="#">Nitro</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="#">Discover</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="#">Safety</a>
        </li>
     
        <li class="nav-item">
          <a class="nav-link fw-bold" href="#">Support</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="#">Careers</a>
        </li>
      </ul>

<Link to="/login">
        <button class="login-button  btn login-button bg-white border-0 p-2 px-4" style={{borderRadius:"45px"}} type="submit">Login</button>
        </Link>
    </div>
  </div>
</nav>
   </>
  )
}

export default Darknavbar