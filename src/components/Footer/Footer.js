import React from 'react';
import "./Footer.css";
import dhsLogo from "../../images/dhs_logo_official_0.png";
 
import { Link } from 'react-router-dom';
 
const Footer = () => {
    return (
       <div className="footerDiv">

            <ul className="footerMenu">
                <li><Link to="/" className="footerHome footerText">Home</Link></li>
                <li><span className="footerPrivacy footerText">Privacy Policy</span></li>
                <li><Link to="/niccs_policy" className="footerNICCS footerText">NICCS Policy</Link></li>
                <li><Link to="foia_policy" className="footerFOIA footerText">FOIA Policy</Link></li>
                <li><Link to="/nofear" className="footerNoFear footerText">No Fear Act Policy</Link></li>
                <li><Link to="/access" className="footerAccess footerText">Accessibility</Link></li>
            </ul>

            <div className="imgDiv">
                <img src={dhsLogo} alt="DHS Logo" id="dhsLogo" />
            </div>

       </div>
    );
}
 
export default Footer;