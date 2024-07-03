import React, { useEffect,useState } from 'react';
import Navbar from './Navbar';
import '../style/style.css';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Login() {
        
  const[user,setUser]= useState({
    email:"",
    password:""
  })

const[userdata,setData]=useState([])
const[msg,setMsg]=useState("");


  useEffect(()=>{
    axios.get('http://localhost:8080/Users')
    .then(res=>{
      setData(res.data)
      console.log(userdata);
    })
  
   },[])


 let name,value;
  const handlerChange=(e)=>{
    name=e.target.name;
    value=e.target.value;

     setUser({
      ...user,
      [name]:value
     })
     setMsg("")
  }

  



 
  const navigate= useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    for(let i=0;i<userdata.length;i++){
      const data=userdata[i];
      if(data.email===user.email){
           if(data.password===user.password){
              setMsg("")
              navigate('/Register');
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
        <div className='form_container container-fluid vh-100'>
          <div className='form_box border '>
              <div className='header'><strong>Login</strong></div>
                  <div  className='input_box'>
                    <form onSubmit={handleSubmit}>
                      <div className='input_group'>
                      <div className='input-field text-center mt-4'><label className='text-danger'>{msg}</label></div>
                          <div className='input_field'>
                          
                          <i className="fa-solid fa-user"></i>
                          <input type="email" name='email' placeholder='email' value={user.email} autoComplete="off" onChange={handlerChange} required/>
                          </div>
                          
                          <div className='input_field'>
                            <i className="fa-solid fa-lock"></i>
                          <input type="password" name='password' placeholder='password' value={user.password} onChange={handlerChange} required/>
                          </div>
                          
                      </div>
                      <div className="button_group d-grid gap-1 col-8 mx-auto">
                      <button  className="btn btn-dark" type="submit">Sign In</button>
                      <p>Forgot Password ? <NavLink> Click here</NavLink></p>
                      <button className="btn btn-dark" type="button"><NavLink to="/Signup">New User? Sign Up </NavLink></button>
                    </div>
                    </form>
                </div>
              </div>
           </div> 
           
        </>
      )
}

export default Login
