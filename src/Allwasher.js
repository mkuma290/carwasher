import { useEffect } from "react";
import  Axios  from "axios";
import React, { useState } from "react";
function Allwasher() {
  const [washers,setwashers]=useState(null);
  const checkwasher=()=>
  {
    Axios.get("http://localhost:8003/washer/allwashers").then((Response) =>
    {
      //console.log(Response);
      setwashers(Response.data);
    }
    )
  }
  useEffect(()=>
  {
    checkwasher()
  },[])
  return (
    <> 
    {washers?(washers.map(washer=>{
      return( <div>
        <table className="table table-striped">
  <thead>
    <tr>
      
      <th scope="col">WasherId</th>
      <th scope="col">Washername</th>
      <th scope="col">Email</th>
      <th scope="col">Contact</th>
      <th scope="col">Address</th>
      <th scope="col">Password</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{washer.wId}</td>
      <td>{washer.wName}</td>
      <td>{washer.wEmail}</td>
      <td>{washer.wPhone}</td>
      <td>{washer.wAddress}</td>
      <td>{washer.wPassword}</td>
    </tr>
    
  </tbody>
</table>
        
        
         
      </div>)
     
    })):"loading..."}
    
    
    </>

   

  )
}

export default Allwasher;