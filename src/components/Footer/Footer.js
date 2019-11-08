import React from 'react';
import "./Footer.css";
import dhsLogo from "../../images/dhs_logo_official_0.png";
 
import { NavLink } from 'react-router-dom';
 
const Footer = () => {
    return (
       <div className="footerNavDiv">
          <NavLink to="/" className="footerHome">Home</NavLink>
          <br/>
          {/* <p>Privacy Policy</p> */}
          <NavLink to="/niccs_policy">NICCS Policy</NavLink>
          <br/>
          <NavLink to="/nofear" className="footerNoFear">No Fear Act Policy</NavLink>
          <br/>
          <NavLink to="/access" className="footerAccess">Accessibility</NavLink>
          <br/>
          <img src={dhsLogo} alt="DHS Logo" />

       </div>
    );
}
 
export default Footer;