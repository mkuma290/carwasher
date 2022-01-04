import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
function AdminLogin() {
  const [loginData, setLoginData] = useState({ aEmail: "", aPassword: "" });
   
let history=useHistory()
const [loggedIn,setloggedIn]=useState(false);

  function changeLogInData(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }
  function onLogIn() {
    console.log(loginData)
    fetch("http://localhost:8000/admin/auth", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(loginData),
    })
    .then(response=> {console.log(response)
      if(response.status!=200)
      return(Promise.reject(response.text))
      return(response.json())})
    .then(response=>{
        
        setloggedIn(true)
    })
    .catch(err=>{
        alert("Invalid Username or password..")
    });
    

  }
  if(loggedIn)
  {
    history.push("/Admin")
  }
  return (
    <section className="vh-100">
        
      <div className="container py-5 h-100">
        
      
        <div className="row d-flex align-items-center justify-content-center h-100">
        <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
          <h1>Admin Login </h1>
          
          <br></br>
            <form>
              <div className="form-outline mb-4">
              <label className="form-label" for="form1Example13">
                  Email address
                </label>
                <input
                  type="email"
                  name="aEmail"
                  id="form1Example13"
                  className="form-control form-control-sm"
                  onChange={changeLogInData}
                />
                
              </div>

              <div className="form-outline mb-2">
              <label className="form-label" for="form1Example23">
                  Password
                </label>
                <input
                  type="password"
                  id="form1Example23"
                  name="aPassword"
                  className="form-control form-control-sm"
                  onChange={changeLogInData}
                />
                
              </div>
            
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
                onClick={onLogIn}
              >
                Sign in
              </button>
              
              
              
            </form>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminLogin;