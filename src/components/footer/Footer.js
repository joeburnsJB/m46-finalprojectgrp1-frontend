import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="container-row-one">
          {/* Column1 */}
          <div className="row-one-col">
            <h4>COMPANY INFO</h4>
            <ul className="list-unstyled">
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="row-one-col">
            <h4>SUPPORT</h4>
            <ul className="list-unstyled">
              <li>Help</li>
             
             
            </ul>
          </div>
          {/* Column3 */}
          <div className="row-one-col">
            <h4>LANGUAGES</h4>
            <ul className="list-unstyled">
              <li>English</li>
              <li>French</li>
              <li>Chinese</li>
            </ul>
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