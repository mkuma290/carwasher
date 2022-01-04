import React from "react";

import {Link} from "react-router-dom";
function CustomerPage() {
  
  return (
    <>
    <section className="navbar-bg">
      
    <nav className="navbar navbar-expand-sm bg-danger navbar-dark fixed-top">
  <div className="container">
  
    <h1>Happy Customer</h1>
    <div className="collapse navbar-collapse" >
    
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
      <Link to="/">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        </Link>
        <Link to="/Order">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Check Order</a>
        </li>
        </Link>
        
        <li className="d-flex">
      <Link to="/Add">
      <a className="nav-link active" aria-current="page" href="#">Add Order</a>
      </Link>
      </li>
      <li className="d-flex">
      <Link to="">
      <a className="nav-link active" aria-current="page" href="#">Logout</a>
      </Link>
      </li>
     
      
       
    
      </ul>
     
    </div>
  </div>
</nav>
</section>
<div className="bg" >
<img className="card-img-top" src="happy.jpg" width="300" height="540" />
</div>
    </>
  );
}

export default CustomerPage;