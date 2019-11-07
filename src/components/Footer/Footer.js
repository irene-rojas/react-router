import React from 'react';
import "./Footer.css";
 
import { NavLink } from 'react-router-dom';
 
const Footer = () => {
    return (
       <div className="footerNavDiv">
          <NavLink to="/" className="footerHome">Home</NavLink>
          <br/>
          {/* <p>Privacy Policy</p> */}
          <NavLink to="/niccs_policy">NICCS Policy</NavLink>
       </div>
    );
}
 
export default Footer;