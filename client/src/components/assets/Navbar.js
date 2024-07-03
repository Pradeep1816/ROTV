import React from "react";
import "../style/navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <span>ROTV</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  ms-auto mb-lg-0">
            <li className="active">
              <NavLink className="nav-link" to="/" NavLink aria-current="page">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="" aria-current="page">
                Service
              </NavLink>
              <div className="menu">
                <ul class="nav-list ">
                  <li>
                    <NavLink className="nav-link" to="/Login">Verify Ticket</NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="nav-link"
                      to="https://www.confirmtkt.com/train-running-status"
                    >
                      Train Status
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link">Waiting List</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About" aria-current="page">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact">
                Contact us
              </NavLink>
            </li>
          </ul>
          <div class="d-grid gap-3 d-md-flex justify-content-center bg-dark">
          <button class="btn btn-dark border mb-2 " type="button"><NavLink className="nav-link" to="/login">Login</NavLink></button>
          <button class="btn btn-dark border mb-2" type="button"><NavLink className="nav-link" to="/Signup">Registration</NavLink></button>
        </div>
          <div>
          </div>
          <div className="">
            <ul className="admin ms-auto mb-2 ">
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/Admin">
                  Admin Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
