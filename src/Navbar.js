
import React from "react";

import {Link} from "react-router-dom";
function Navbar() {
  
  return (
    <>
    <section className="navbar-bg">
      
    <nav className="navbar navbar-expand-sm bg-danger navbar-dark fixed-top">
  <div className="container">
  <img  src="washer.png" width="130" height="90" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" >
    
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <h2 >Car Wash System</h2>
        </li>
        <Link to="/WasherLogin">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Washer</a>
        </li>
        </Link>
        <Link to="/AdminLogin">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Admin</a>
        </li>
        </Link>
        
        
        <li className="d-flex">
      <Link to="/Login">
        <a  className="btn btn-danger" type="submit"><span></span>Login</a>
      </Link>
      </li>
     
      <li className="d-flex">
      <Link to="/Register">
        <a  className="btn btn-danger" type="submit"><span></span>Sign Up</a>
      </Link>
      </li>
       
    
      </ul>
     
    </div>
  </div>
</nav>
</section>
    </>
  );
}

export default Navbar;