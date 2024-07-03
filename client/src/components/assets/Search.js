import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/adminpanel.css";

export default function Search() {

  const [datas,setData]=useState([])
  
const handleSubmit=(e)=>{
  e.preventDefault()
  axios.get("http://localhost:8080/Passengers")
  .then(res=>{
    const record=res.data;
    setData(record);
  });
  
}

useEffect(()=>{
  axios.get("http://localhost:8080/Passengers")
  .then(res=>{
    const record=res.data;
    setData(record);
  });
},[]) 


  const[status,setStatus]=useState("")
  let c=0;
  const handleChange=(idd)=>{
    
    if(c===0){

      try{
      
        axios.post("http://localhost:8080/VerifiedPassenges",{idd})
        .then(res=>{
        //  console.log(res.data)
        alert(res.data);
      })
      
        axios.get("http://localhost:8080/Passengers")
        .then(res=>{
        const record=res.data;
        setData(record);
        if(record.length===0){
          const p="Record Not Found"
          setStatus(p)
        }
      });
  
      }catch(err){
           alert(err)
      }
      
      c=c+1;
    }else{
      alert("Passengers verified");
    }
    
    
    
    
  }
  

  return (
    <div className="container-fluid  d-flex">
      <div className="container vh-100">
        <div className="row">
          <div className="col-12">
            <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
              <div>
                <input
                  type="submit"
                  className="rounded p-2 bg-dark text-light"
                 value="Refresh"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="">
          <table id="mainTable" className="table table-hover table-sm text-center ">
             <thead className="thead-light">
             <tr>
                <th scope="col">ACTION</th>
                <th scope="col">Sr.No</th>
                <th scope="col">Name</th>
                <th scope="col">AGE</th>
                <th scope="col">ADHAR NUMBER</th>
                <th scope="col">PHONE NUMBER</th>
                <th scope="col">TRAIN NUMBER</th>
                <th scope="col">COACH NUMBER</th>
                <th scope="col">CLASS</th>
                <th scope="col">PNR NUMBER</th>
                <th scope="col">STATUS</th>
              </tr>
             </thead>
             <tbody>
             {
              datas.length>0 ?(
                
                  datas.map((getdata,index)=>(
                  <tr key={index}>
                   <td><input type="button" className="btn btn-primary" value="Click to verify"  onClick={()=>{handleChange(getdata._id)}}/></td>
                  <td>{index+1}</td>
                  <td>{getdata.firstName +" "+getdata.LastName}</td>
                  <td>{getdata.Age}</td>
                  <td>{getdata.AdharNumber}</td>
                  <td>{getdata.PhoneNumber}</td>
                  <td>{getdata.TrainNumber}</td>
                  <td>{getdata.CoachNumber}</td>
                  <td>{getdata.Classes}</td>
                  <td>{getdata.PnrNumber}</td>
                  <td>{getdata.status}</td>
                   
                  </tr>
                ))
                ):(
                  <td>{status}</td>
                )
             }
           </tbody>  
          </table>
        </div>
      </div>
    </div>
  );
}
