import "./App.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/assets/Home";
import Registraion from "./components/assets/Registraion";
import About from "./components/assets/About";
import Contact from "./components/assets/Contact";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Admin from "./components/assets/Admin";
import Login from "./components/assets/Login";
import Signup from "./components/assets/Signup";
import Footer from "./components/assets/Footer";
import Register from "./components/assets/Register";
import Status from "./components/assets/Status";
import UserNavbar from "./components/assets/UserNavbar";
import AdminPanel from "./components/assets/AdminPanel";
import Passenger from "./components/assets/Passenger";
import Search from "./components/assets/Search";
function App() {
  return (
    <>
    {/* <Navbar/> */}

    <Router>
      <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="Registration" Component={Registraion}/>
       <Route exact path="About" Component={About}/>
       <Route exact path="Contact" Component={Contact}/>
       <Route exact path="Admin" Component={Admin}/>
       <Route exact path="Login" Component={Login}/>
       <Route exact path="Signup" Component={Signup}/>
       <Route exact path="Register" Component={Register}/>
       <Route exact path="Status" Component={Status}></Route>
       <Route exact path="UserNavbar" Component={UserNavbar}/>
         <Route path="AdminPanel/" element={<AdminPanel/>}>
              <Route path="passenger" element={<Passenger/>}/>
              <Route path="search" element={<Search/>}/>
         </Route>
    </Routes>
    
  </Router>
  <Footer/>
    </>
    
  );
}

export default App;
