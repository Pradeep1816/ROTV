import React from "react";
import "../style/footer.css";
function Footer() {
  return (
    <div className="fotter">
      <div className="container">
        <div className="row ">
          <div className="col-md-6 col-lg-4 col-12 ">
            <h4 className="head-tag text-center">Footer Secation</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              dolorem corrupti, fuga repellat aliquam natus voluptatibus enim
            </p>
          </div>
          <div className="footer col-md-6 col-lg-4 col-12">
          <div className="Q_link">
          <h4 className="head-tag text-center">Quick Links</h4>
             <ul>
              <li className="">Home</li>
              <li className="">Service</li>
              <li className="">About</li>
              <li className="">Contact</li>
             </ul>
          </div>
          </div>
          <div className='col-md-6 col-lg-4 col-12'>
          <div className="Q_link">
            <h4 className="head-tag text-center">Contact Info</h4>
            <ul>
              <li className="">199126484684</li>
              <li className="">pradeep@gmailc.om</li>
              <li className="">Linkdin</li>
             </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
