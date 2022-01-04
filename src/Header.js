import React from "react";
import {Link} from "react-router-dom";
function Header() {
    return (
      <>
<div className="container">
  <br></br>
  <br></br>
  <br></br>
  <br></br>
<h1>Scheduled Services</h1><br></br>
<div className="menu">

<div className="card" >
 
  <div className="card-body w3-white w3-hover-shadow w3-padding-64 w3-center">
  <img className="card-img-top " src="silver-wash.jpg" width="1" height="300" />
    <h5 className="card-title">Silver wash</h5>
    <p classname="card-text"> Body Shampooing and washing including door frames </p>
    <Link to="/Login">
    <a href="#" class="w3-button w3-red">Add Order</a>
    </Link>
  </div>
</div>
<br></br>

</div>

<div className="main">
<div className="card" >
 
  <div className="card-body w3-white w3-hover-shadow w3-padding-64 w3-center">
  <img className="card-img-top " src="gold-wash.jpg" width="1" height="300" />
    <h5 className="card-title">Gold wash</h5>
    <p className="card-text">Complete vacuuming of cars incl. seats and boot </p>
    <Link to="/Login">
    <a href="#" class="w3-button w3-red">Add Order</a>
    </Link>
  </div>
</div>
<br></br>


</div>
</div>
      </>
     
     
    );
  }
  
  export default Header;