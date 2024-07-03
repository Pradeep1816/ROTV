import React, { useEffect } from 'react'
import '../style/style.css';
import { NavLink, useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import { useState } from 'react';
import axios from 'axios';
 





function Admin() {

  const[admin,setAdmin]=useState({
    email:"",
    password:""
  })
const[msg,setMsg]=useState("");


  let name,value;
  const handlerChange=(e)=>{
    name=e.target.name
    value=e.target.value

    setAdmin({
      ...admin,
       [name]:value
    })
    setMsg("")

  }
  const navigate=useNavigate();


  const[userdata,setData]=useState([])

 useEffect(()=>{
  axios.get('http://localhost:8080/Users')
  .then(res=>{
    setData(res.data)
  })

 },[])



  const handlerSubmit=(e)=>{
    e.preventDefault();
    for(let i=0;i<userdata.length;i++){
      const data=userdata[i];
      if(data.email===admin.email){
           if(data.password===admin.password){
              setMsg("")
              navigate('/AdminPanel');
           }else{
            setMsg("Uername and Password Incorrect")
           }
      }else{
        setMsg("Uername and Password Incorrect")
      }
    }
  }



  return (
    <>
    <Navbar/>
    <div className='admin_login template d-flex justify-content-center align-items-center 200-w vh-100'>
        <div className='p-2  rounded border admin_form'>
        <form  onSubmit={handlerSubmit}>
            <h1 className='text-center'>Sign In</h1>
            <hr ></hr>
            <div className='mb-2'> 
                <label className='text-danger'>{msg}</label><br/>
                <label className='mb-1' htmlFor="email"><strong>Email</strong></label>
                
                <input type="email" name="email" placeholder ='User name' value={admin.email} className='form-control' required onChange={handlerChange} autoComplete='off'/>
            </div>
            <div className='mb-2'>
                <label className='mb-1' htmlFor="password"><strong>Password</strong></label>
                <input type="password" name="password" placeholder ='Password'value={admin.password} className='form-control' required onChange={handlerChange}/>
            </div>
            <div className='d-grid'>
                 <button type="submit" className='btn btn-primary mt-2'>Log In</button>
            </div>
            <p className='text-end mt-2'>
              <NavLink className="active" to="/"> Forgot Password?</NavLink> <NavLink to='/signup' className='ms-2'>Sign up</NavLink>
            </p>
        </form>
        </div>
    </div>
    </>
  )
}

export default Admin
