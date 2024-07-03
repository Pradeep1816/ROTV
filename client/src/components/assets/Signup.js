import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import '../style/style.css';
import Navbar from "./Navbar";
import { useState } from "react";
import axios from "axios";
function Signup() {
        

    const[userdata,setData]= useState({
      username:"",
      email:"",
      password:"", 
      confPassword:""

    }) ;
   let name,value;
    const handler=(e)=>{
         name=e.target.name;
         value=e.target.value;


       setData({
        ...userdata,
         [name]:value
       })
    }
    const navigate=useNavigate();

    const handerSubmit=(e)=>{
     
        e.preventDefault()
        if(userdata.password!==userdata.confPassword){
          alert("Conformpassword not match");
        }else{
        axios.post("http://localhost:8080/Users",userdata)
        .then(res=>{
          if(res.data ==="exist"){
            alert("user Exist");
          }else{
            alert("Registraion Success");
            navigate('/login');
          } 
          console.log(res)
          
         })

        .catch(err=>console.log(err))
       }
    }


  return (
    <>
    <Navbar/>
    <div className='form_container container-fluid vh-100'>
      {/* <div><p>{JSON.stringify(userdata)}</p></div> */}
          <div className='form_box border '>
              <div className='header'><strong>Registration</strong></div>
                  <div className="head"><h1><u>Create Account</u></h1></div>  
                  <div  className='input_box'>
                    <form onSubmit={handerSubmit}>
                      <div className='input_group'> 
                      
                          <div className='input_field'>
                          <i className="fa-solid fa-user"></i>
                          <input type="text" name='username' placeholder='Fullname' required value={userdata.username} onChange={handler}/>
                          </div>
                          <div className='input_field'>
                          <i className="fa-solid fa-envelope"></i>
                          <input type="email" name='email' placeholder='Email' required value={userdata.email} onChange={handler}/>
                          </div>
                          <div className='input_field'>
                            <i className="fa-solid fa-lock"></i>
                          <input type="password" name='password' placeholder='password' value={userdata.password} required onChange={handler}/>
                          </div>
                          <div className='input_field'>
                            <i className="fa-solid fa-lock"></i>
                          <input type="password" name='confPassword' placeholder='ConfirmPassword' value={userdata.confPassword} required onChange={handler}/>
                          </div>
                          
                      </div>
                      <div className="button_group d-grid gap-1 col-8 mx-auto">
                      <button  className="btn btn-dark" type="submit">Create</button>
                     <p>Already have an Account ?<NavLink  to="/Login"> Click Here</NavLink></p>
      
                    </div>
                    </form>
                </div>
              </div>
           </div> 
    </>
  );
}
export default Signup;