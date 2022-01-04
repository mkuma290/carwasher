import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

export class WasherRegister extends Component {
  constructor(props) {
    super(props)

    this.state = {
         wId:'',
         wName:'',
         wPhone:'',
         wEmail:'',
         wAddress:'',
         wPassword:'',
     
         
         wNameError:'',
         wPhoneError:'',
         wPasswordError:'',
         isProfile: false
    }
    this.register=this.register.bind(this)
    this.handleChange=this.handleChange.bind(this)
}
valid(){
    if(this.state.wName.length<4 && this.state.wPassword.length<6 && this.state.wPhone.length<10 ) {
        this.setState({
          wNameError:"Name cannot be less than 3 word",
          wPasswordError:"Password should be more than 6", 
            wPhoneError:"Invalid Mobile Number"

        })
    }
    else if(this.state.wName.length<4){
        this.setState({
          wNameError:"Name cannot be less than 3 word"})
    }
    else if(this.state.wPassword.length<6){
        this.setState({
          wPasswordError:"Password should be more than 6"
        })
    }
    else if(this.state.wPhone.length<10){
        this.setState({
          wPhoneError:"Invalid Mobile Number"
        })
    }
    else{
        return true
    }
}
register(e){
    this.setState({
      wNameError:"",
        wPasswordError:"",
        wPhoneError:""

    })
    e.preventDefault()
    
    if(this.valid()){
        fetch("http://localhost:8003/washer/addwasher",{
            "method":"POST",
            "headers":{
                "content-type":"application/json",
                "accept":"application/json",
                "Access-Control-Allow-Origin":"*"
            },
            "body": JSON.stringify({
                wId: this.state.wId,
                wName:this.state.wName,
                wPhone: this.state.wPhone,
                wEmail: this.state.wEmail,
                wAddress: this.state.wAddress,
                wPassword: this.state.wPassword
            })
        })
        .then(response=> response.json())
        .then(response=>{
            alert("You have been Registered Successfully")
            
        })
        
        .catch(err=>{
            alert("Your Registration Failed..!!!!")
        })
        
    }
}
handleChange(changeObject){
    this.setState(changeObject)
}
  render() {
    return (
      <section className="h-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-sm-9 col-sm-8">
            <div className="card text-black" >
              <div className="card-body p-md-4">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-sm-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Washer Sign up
                    </p>

                    <form className="mx-0 mx-sm-0">
                      <div className="d-flex flex-row align-items-center mb-0">
                        <i className="fas fa-user fa-sm me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                           onChange={(e)=>this.handleChange({
                            wId: e.target.value
                           })}
                            type="number"
                            id="form3Example1c"
                            className="form-control"
                            placeholder="Your ID"
                          />
                          <label className="form-label" for="form3Example1c">
                            
                          </label>
                         
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-0">
                        <i className="fas fa-user fa-sm me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            onChange={(e)=>this.handleChange({
                              wName: e.target.value
                             })}
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            placeholder="Enter Your Name"
                          />
                          <label className="form-label" for="form3Example1c" ></label>
                          <p style={{color:'red'}}>{this.state.wNameError}</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-0">
                        <i className="fas fa-user fa-sm me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            onChange={(e)=>this.handleChange({
                              wPhone: e.target.value
                             })}
                            type="tel"
                            id="form3Example1c"
                            className="form-control"
                            placeholder="Enter Your Phone Number"
                          />
                          <label className="form-label" for="form3Example1c">
                            
                          </label>
                          <p style={{color:'red'}}>{this.state.wPhoneError}</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-0">
                        <i className="fas fa-user fa-sm me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            onChange={(e)=>this.handleChange({
                              wEmail: e.target.value
                             })}
                            type="email"
                            id="form3Example1c"
                            className="form-control"
                            placeholder="Enter Your Email"
                          />
                          <label className="form-label" for="form3Example1c">
                            
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-0">
                        <i className="fas fa-envelope fa-sm me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            onChange={(e)=>this.handleChange({
                              wAddress: e.target.value
                             })}
                            type="text"
                            id="form3Example3c"
                            className="form-control"
                            placeholder="Enter Your Address"
                          />
                          <label className="form-label" for="form3Example3c">
                            
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-0">
                        <i className="fas fa-lock fa-sm me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                           onChange={(e)=>this.handleChange({
                            wPassword: e.target.value
                           })}
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            placeholder="Enter Password"
                          />
                          <label className="form-label" for="form3Example4c">
                            
                          </label>
                          <p style={{color:'red'}}>{this.state.wPasswordError}</p>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-sm-0">
                        <button type="button" className="btn btn-primary btn-lg"
                         onClick={(e)=>this.register(e)}>
                          Register
                        </button>
                      </div>
                      <p className="text-center text-muted mt-5 mb-0"> have an account? <Link to="/WasherLogin" className="fw-bold text-body"><u>Login here</u></Link></p>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-sm-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      className="img-fluid"
                      alt="Sample"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
}

export default WasherRegister