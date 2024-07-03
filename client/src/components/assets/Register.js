import React, { useState } from "react";
//import '../style/navbar.css';
import "../style/style.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
function Register() {
   
  const [passengers,setPassenger]=useState({
      firstName:"",
      LastName :"",
      Age:"",
      AdharNumber:"",
      PhoneNumber:"",
      TrainNumber:"",
      CoachNumber:"",
      Classes:"",
      PnrNumber:""
  });
  let name,value;
const handler=(e)=>{
    name=e.target.name;
    value=e.target.value;

    setPassenger({
      ...passengers,
      [name]:value
      
    })
   
}


const handlersubmit=(e)=>{
  
  e.preventDefault()
  axios.post("http://localhost:8080/Passengers",passengers)
  .then(res=>{
   if(res.data==="success"){
    alert("Registrion success");
   }
  })
  
}



  return (
<div className="">
<nav className="navbar navbar-expand">
    <div className="container bg-dark">
      <div className="log collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul className="log navbar-nav">
          <li className="active">
            <NavLink className="nav-link text-light" to='/Register' NavLink aria-current="page">Registration</NavLink>
          </li>
          <li className="nav-item log">
            <NavLink className="nav-link" to='/Status' aria-current="page">Check Status
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to='/About' aria-current="page">PNR Status</NavLink>
          </li>
        </ul>
        
      </div>
      <NavLink className="log" to='/'><span>Logout</span></NavLink>
    </div>
  </nav>
    <div className="container">
      <div className="offset-lg-3 col-lg-6">
        <form  onSubmit={handlersubmit} >
          <div className="card border border-bg-light">
            <div className="card-header">
              <h1 className="text-center">Ticket Registration</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      First Name <span className="errmsg text-danger">*</span>
                    </label>
                    <input type="text" name="firstName" required className="form-control" value={passengers.firstName} onChange={handler}/>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Last Name <span className="errmsg text-danger">*</span>
                    </label>
                    <input type="text" name="LastName" required className="form-control" value={passengers.LastName} onChange={handler}/>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Age <span className="errmsg text-danger">*</span>
                    </label>
                    <input type="text" name="Age" className="form-control" required value={passengers.Age} onChange={handler}/>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Adhar Number <span className="errmsg text-danger">*</span>
                    </label>
                    <input type="text" name="AdharNumber" className="form-control" required value={passengers.AdharNumber} onChange={handler}/>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                       Phone Number<span className="errmsg text-danger">*</span>
                    </label>
                    <input type="Phone" name="PhoneNumber" className="form-control" required value={passengers.PhoneNumber} onChange={handler} />
                  </div>
                </div>   
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Train Number<span className="errmsg text-danger">*</span>
                    </label>
                    <input type="text" name="TrainNumber" className="form-control" required value={passengers.TrainNumber} onChange={handler} />
                  </div>
                </div>   
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Coach Number<span className="errmsg  text-danger">*</span>
                    </label>
                    <input type="text" name="CoachNumber" className="form-control" required value={passengers.CoachNumber} onChange={handler}/>
                  </div>
                </div>   
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Class Type <span className="errmsg"></span>
                    </label>
                    <input type="text" name="Classes" className="form-control" value={passengers.Classes} onChange={handler}/>
                  </div>
                </div> 
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                     Pnr Number<span className="errmsg text-danger">*</span>
                    </label>
                    <input type="text" name="PnrNumber" className="form-control" required value={passengers.PnrNumber} onChange={handler}/>
                  </div>
                </div>                       
               <div className="card-footer">
              <button type="submit" className="btn btn-primary mr-5">
                Register
              </button>
            </div>
          </div>
          </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
