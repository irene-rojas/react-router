import React from 'react';
import "./Footer.css";
import dhsLogo from "../../images/dhs_logo_official_0.png";
 
import { NavLink } from 'react-router-dom';
 
const Footer = () => {
    return (
       <div className="footerNavDiv">
           <div className="footerContent">
            <NavLink to="/" className="footerHome footerText">Home</NavLink>
            <br/>
            <span className="footerPrivacy footerText">Privacy Policy</span>
            <NavLink to="/niccs_policy" className="footerNICCS footerText">NICCS Policy</NavLink>
            <br/>
            <NavLink to="/nofear" className="footerNoFear footerText">No Fear Act Policy</NavLink>
            <br/>
            <NavLink to="/access" className="footerAccess footerText">Accessibility</NavLink>
            <br/>
            <img src={dhsLogo} alt="DHS Logo" id="dhsLogo" />

           </div>

       </div>
    );
}
 
export default Footer;