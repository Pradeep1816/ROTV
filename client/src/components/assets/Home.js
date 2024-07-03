import React from "react";
import "../style/style.css";
import Navbar from "./Navbar";
import Marquee from "react-fast-marquee";
import UserNavbar from "./UserNavbar";
import { Outlet } from "react-router-dom";
function Home() {
  return (
    <>
    <div> 
    {/* <UserNavbar/> */}
    <Navbar/>
    
    <div className="home justify-content-center">
      <div className="container-fluid vh-100">
      <div className="marque">
      <Marquee behavior="altenate" direction="left" speed="100" pauseOnHover="this.stop();" pauseOnClick="this.start();">Welcome to Bharatiya Railways</Marquee>
      </div>
        <div className="row">
          <div className="row_column col-10 mx-auto">
            <div className="row">
              <div className="col-md-6  order-2 order-lg-1 d-flex justify-content-center">
            
              </div>
              <div className="column col-md-6 col-lg-6 border">
               <div className="textheading">
               <label htmlFor="">BHARATIYA RAILWAYS</label>
                <span>Safety</span>
                <span>Security</span>
                <span>Punctuality</span>
               </div>
                <div className="text-primary" >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     </div>
     <div className="icons_container d-flex">
     <div className="icon_text"><p>Get Connected with us on social networks</p></div>
       <div className="icon">
        <a href="/"><i className="fa-brands fa-facebook align-center"></i></a>
       <a href="/"><i className="fa-brands fa-square-instagram"></i></a> 
        <a href="/"><i className="fa-brands fa-twitter"></i></a>
        <a href="/"><i className="fa-brands fa-youtube"></i></a>
        <a href="/"><i className="fa-brands fa-facebook-messenger"></i></a>
      </div>   
    </div>
    </>
  );
}

export default Home;
