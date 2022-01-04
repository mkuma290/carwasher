import React from "react";
import Fetch from 'react-fetch'
        
class Addorder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            orderId: '',
            cId:'',
              carName:'',
              carModel:'',
              status:'',
              washPackId:'',
              serviceDate:'',
              phoneNo:'',
              address:''
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    this.handleChange=this.handleChange.bind(this)
    }

handleSubmit(e)
    {
        e.preventDefault();
        fetch("http://localhost:8082/order/addorder",{
            "method":"POST",
            "headers":{
                "content-type":"application/json",
                "accept":"application/json",
                "Access-Control-Allow-Origin":"*"
            },
            "body": JSON.stringify({
                orderId: this.state.orderId,
                cId:this.state.cId,
                serviceDate: this.state.serviceDate,
                carName:this.state.carName,
                carModel: this.state.carModel,
                washPackId: this.state.washPackId,
                phoneNo:this.state.phoneNo,
                address:this.state.address,
                status:this.state.status
            })
        })
        .then(response=> response.json())
        .then(response=>{
            alert("Order not placed")
            
        })
        
        .catch(err=>{
            alert("Your Order Placed Succesfully..!!!!")
        })
        
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
                          Add Order
                        </p>
    
                        <form className="mx-0 mx-sm-0">
                          <div className="d-flex flex-row align-items-center mb-0">
                            <i className="fas fa-user fa-sm me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                               onChange={(e)=>this.handleChange({
                                orderId: e.target.value
                               })}
                                type="number"
                                id="form3Example1c"
                                className="form-control"
                                placeholder="Your Order ID"
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
                                    cId: e.target.value
                                   })}
                                type="text"
                                id="form3Example1c"
                                className="form-control"
                                placeholder="Enter Customer Id"
                              />
                              <label className="form-label" for="form3Example1c" ></label>
                              
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-0">
                            <i className="fas fa-user fa-sm me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                               onChange={(e)=>this.handleChange({
                                serviceDate: e.target.value
                               })}
                                type="tel"
                                id="form3Example1c"
                                className="form-control"
                                placeholder="Enter Service Date"
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
                                    carName: e.target.value
                                   })}
                                type="email"
                                id="form3Example1c"
                                className="form-control"
                                placeholder="Enter Car Name"
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
                                    carModel: e.target.value
                                   })}
                                type="text"
                                id="form3Example3c"
                                className="form-control"
                                placeholder="Enter Car Model"
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
                                phoneNo: e.target.value
                               })} 
                                type="text"
                                id="form3Example4c"
                                className="form-control"
                                placeholder="Contact"
                              />
                              <label className="form-label" for="form3Example4c">
                                
                              </label>
                              
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-0">
                            <i className="fas fa-user fa-sm me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                               onChange={(e)=>this.handleChange({
                                address: e.target.value
                               })} 
                                type="tel"
                                id="form3Example1c"
                                className="form-control"
                                placeholder="Enter Your Address"
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
                                status: e.target.value
                               })}
                                type="tel"
                                id="form3Example1c"
                                className="form-control"
                                placeholder="Enter Status"
                              />
                              <label className="form-label" for="form3Example1c">
                                
                              </label>
                              
                            </div>
                          </div>
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-sm-0">
                            <button type="button" className="btn btn-danger btn-lg"
                             onClick={(e)=>this.handleSubmit(e)}>
                              Add Order
                            </button>
                          </div>
                         
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-sm-4">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp"
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
    
    export default Addorder