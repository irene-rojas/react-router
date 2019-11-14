import React from 'react';
import "./Footer.css";
import dhsLogo from "../../images/dhs_logo_official_0.png";
 
import { Link } from 'react-router-dom';
 
const Footer = () => {
    return (
       <div className="footerNavDiv">

           <div className="footerContent">
            <Link to="/" className="footerHome footerText">Home</Link>
            <br/>
            <span className="footerPrivacy footerText">Privacy Policy</span>
            <Link to="/niccs_policy" className="footerNICCS footerText">NICCS Policy</Link>
            <br/>
            <Link to="/nofear" className="footerNoFear footerText">No Fear Act Policy</Link>
            <br/>
            <Link to="/access" className="footerAccess footerText">Accessibility</Link>
            <br/>
            <img src={dhsLogo} alt="DHS Logo" id="dhsLogo" />

           </div>

       </div>
    );
}
 
export default Footer;