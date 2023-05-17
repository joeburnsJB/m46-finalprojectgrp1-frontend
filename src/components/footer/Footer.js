//import React from 'react'
//import "./Footer.css"

//const Footer = () => {
  //return (
  //  <div>Footer</div>
  //)
//}

//export default Footer



import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>COMPANY INFO</h4>
            <h1 className="list-unstyled">
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>SUPPORT</h4>
            <ui className="list-unstyled">
              <li>Help</li>
             
             
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>LANGUAGES</h4>
            <ui className="list-unstyled">
              <li>English</li>
              <li>French</li>
              <li>Chinese</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} CodeNation BootCamp | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
