import React from "react";
import Fetch from 'react-fetch'
        
class Addorderpage extends React.Component {
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
            alert("Your Registration Failed..!!!!")
            
        })
        
        .catch(err=>{
            alert("You have been Registered Successfully")
        })
        
    }
    handleChange(changeObject){
        this.setState(changeObject)
    }
    render(){
        
        return(
            <div>
                
               
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <br /><br />
                        <h3>Add Order</h3><br />
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label>OrderId :</label>
                                    <input type="text"  class="form-control" name="title" onChange={(e)=>this.handleChange({
                            orderId: e.target.value
                           })} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label>cId :</label>
                                    <input type="text"  class="form-control" name="title" onChange={(e)=>this.handleChange({
                            cId: e.target.value
                           })} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label>Date :</label>
                                    <input type="text"   class="form-control" onChange={(e)=>this.handleChange({
                            serviceDate: e.target.value
                           })} />
                                </div>
                            </div>
                            
                            

                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label>Car Name :</label>
                                    <input type="text"  class="form-control" onChange={(e)=>this.handleChange({
                            carName: e.target.value
                           })} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label>Car Model :</label>
                                    <input type="text"  class="form-control" onChange={(e)=>this.handleChange({
                            carModel: e.target.value
                           })} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label>Wash Pack Id :</label>
                                    <input type="text"  class="form-control" onChange={(e)=>this.handleChange({
                            washPackId: e.target.value
                           })} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label>Contact :</label>
                                    <input type="text"  class="form-control" onChange={(e)=>this.handleChange({
                            phoneNo: e.target.value
                           })} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label>Address :</label>
                                    <input type="text"  class="form-control" name="title" onChange={(e)=>this.handleChange({
                            address: e.target.value
                           })} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label>Status :</label>
                                    <input type="text"  class="form-control" name="title" onChange={(e)=>this.handleChange({
                            status: e.target.value
                           })} />
                                </div>
                            </div>
                           
                            
                           
                            
                            <br></br>
                            <div class="form-row">
                                <div class="col-md-12 text-center">
                                    <button type="submit" class="btn btn-primary" onClick={(e)=>this.handleSubmit(e)}>Submit</button>
                                </div>
                            </div>
                    </div>
                </div>
                
            </div>
        )  
    }
}

export default Addorderpage;