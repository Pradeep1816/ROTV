import React from "react";
import "../style/adminpanel.css";
import { NavLink } from "react-router-dom";
export default function Dashboard() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <a class="navbar-brand" href="/">
        <i class="fa-solid fa-person"></i>
          Admin
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-light"></span>
        </button>
        <div
          className="collapse navbar-collapse  justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav  mb-lg-0 ">
          <li className="nav-item"><i class="fa-solid fa-house"></i></li>
            <li className="nav-item ">
            
              <a
                className="nav-link text-light active"
                aria-current="page"
                href="/"
              >
                
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light active" href="#">
                
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-light active" href="#">
                
              </a>
            </li>
          </ul>
          <div className="ms-auto">
            <ul >
              <li className="nav-item">
                <span>
                  <NavLink className="nav-brand nav-link text-light" to="/">Logout</NavLink>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
