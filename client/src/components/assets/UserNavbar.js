import React from 'react'
import "../style/navbar.css"
import { NavLink } from 'react-router-dom'
 function UserNavbar() {
  return (
    <div class="d-grid gap-3 d-md-flex justify-content-md-end bg-dark fixed-top">
    <button class="btn btn-dark border mt-3 " type="button"><NavLink className="nav-link" to="/login">Login</NavLink></button>
    <button class="btn btn-dark border mt-3" type="button"><NavLink className="nav-link" to="/Signup">Registration</NavLink></button>
  </div>
  )
}
export default UserNavbar
