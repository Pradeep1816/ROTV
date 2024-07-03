import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Sidebar from "./Dashboard";
import Dashboard from "./Dashboard";
import Search from "./Search";
export default function AdminPanel() {
  return (
    <>
    <Dashboard/>
  <div className="vh-100">
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div
          className="collapse navbar-collapse  justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav dash_list bg-dark  mb-lg-0 ">
            <li className="nav-item ">
              <NavLink className="nav-link text-light" to="search">PASSENGER LIST </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="" className="nav-link text-light"> WAITING LIST</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light"> CANCEL TICKETS</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Outlet/>
    </div>
    </>
  );
}
