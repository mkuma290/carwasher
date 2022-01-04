import { useEffect } from "react";
import  Axios  from "axios";
import React, { useState } from "react";
function Order() {
  const [orders,setorders]=useState(null);
  const checkorder=()=>
  {
    Axios.get("http://localhost:8082/order/allorders").then((Response) =>
    {
      //console.log(Response);
      setorders(Response.data);
    }
    )
  }
  useEffect(()=>
  {
    checkorder()
  },[])
  return (
    <> 
    {orders?(orders.map(order=>{
      return( <div>
        <table className="table table-striped">

    <tr>
      <th scope="col">orderId</th>
      <th scope="col">Carname</th>
      <th scope="col">carModel</th>
      <th scope="col">washPackId</th>
      <th scope="col">Contact</th> 
    </tr>
  
  
    
    <td>{order.orderId}</td>
      <td>{order.carName}</td>
      <td>{order.carModel}</td>
      <td>{order.washPackId}</td>
      <td>{order.phoneNo}</td>
    
    
  
</table>
        
        
         
      </div>)
     
    })):"loading"}
    
    
    </>

   

  )
}

export default Order;