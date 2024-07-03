import React, { useState } from "react";
import "../style/style.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
function Status() {


const[record,setRecord]=useState([])
const[pnr,setPnr]=useState("");
const[msg,setMsg]=useState("")


const handler=(e)=>{
  setPnr(e.target
    .value)
    setRecord([]);
    setMsg("");
}
  

  

    const handeleSubmit=((e)=>{
    e.preventDefault()
    axios.post("http://localhost:8080/SearchData",{pnr})
    .then(res=>{
      const resp=res.data;
        if(resp.length===0){
           setMsg("Record Not Found");
        }else{
          setRecord(res.data)
          setMsg("");
        }
        
    });
    console.log(record)
   
   }) 
   

  return (
    <>
    <div className="container-fluid">
      <nav className="navbar navbar-expand">
        <div className="container bg-dark">
          <div
            className="log collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="log navbar-nav">
              <li className="active">
                <NavLink
                  className="nav-link text-light"
                  to="/Register"
                  NavLink
                  aria-current="page"
                >
                  Registration
                </NavLink>
              </li>
              <li className="nav-item log">
                <NavLink
                  className="nav-link text-light"
                  to="/Status"
                  aria-current="page"
                >
                  Check Status
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About" aria-current="page">
                  PNR Status
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink className="log" to="/">
            <span>Logout</span>
          </NavLink>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="container">
          <div className="card">
            <p></p>
            <div class="card-body">
              <form onSubmit={handeleSubmit}>
                <label htmlFor="" className="p-2">
                  Enter Your PNR Number :
                </label>
                <input type="text" className="form-control" placeholder="search" required onChange={handler}/>
             
                <div className="card-footer">
                <button type="submit" className="btn btn-primary">
                  submit
                </button>
              </div>
              </form>
            </div>
          </div>
          <div className="">
             <table id="mainTable" className="table table-sm">

             <table id="mainTable" className="table table-hover table-sm text-center ">
             <thead className="thead-light">
             <tr>
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
                record.length >0 ?(
                  record.map((data,index)=>(
                  <tr key={index}>
                  <td>{data.firstName +" "+data.LastName}</td>
                  <td>{data.Age}</td>
                  <td>{data.AdharNumber}</td>
                  <td>{data.PhoneNumber}</td>
                  <td>{data.TrainNumber}</td>
                  <td>{data.CoachNumber}</td>
                  <td>{data.Classes}</td>
                  <td>{data.PnrNumber}</td>
                  <td>{data.status}</td>
                  </tr> 

                  ))
                  
                ) :(
                  <tr>
                  <td>{msg}</td>
                  </tr>
                  

                )
              }
               
             </tbody>
              
          </table>


          </table>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}

export default Status;
