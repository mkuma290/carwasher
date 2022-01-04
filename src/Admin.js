import React from "react";

import {Link} from "react-router-dom";
function Admin() {
  
  return (
    <>
    <section className="navbar-bg">
      
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark fixed-top">
  <div className="container">
  
    <h1>Admin Page</h1>
    <div className="collapse navbar-collapse" >
    
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
      <Link to="/">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        </Link>
        <Link to="/Order">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Order</a>
        </li>
        </Link>
        
        <li className="d-flex">
      <Link to="Allwasher">
      <a className="nav-link active" aria-current="page" href="#">Washer</a>
      </Link>
      </li>
      <li className="d-flex">
      <Link to="">
      <a className="nav-link active" aria-current="page" href="#">logout</a>
      </Link>
      </li>
     
      
       
    
      </ul>
     
    </div>
  </div>
</nav>
</section>
<div className="bg" >
<img className="card-img-top" src="Admin--.jpg" width="100" height="480" />
</div>
    </>
  );
}

export default Admin;