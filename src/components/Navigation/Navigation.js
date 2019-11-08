import React from 'react';
import "./Navigation.css";
import niccsLogo from "../../images/logo-dark.png";
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div className="navDiv">
          <NavLink to="/" className="navLinkHome navText">
             <img src={niccsLogo} id="niccsLogo" alt="National Initiative for Cybersecurity Careers and Studies" />
             <h2 id="niccsSlogan">National Initiative for Cybersecurity Careers and Studies</h2>
            </NavLink>
          <br/>
          <NavLink to="/about" className="navLinkAbout navText">About</NavLink>
          <br/>
          <NavLink to="/training" className="navLinkContact navText">Training</NavLink>
          <br/>
          <NavLink to="/education" className="navLinkEdu navText">Education</NavLink>
          <br/>
          <NavLink to="/develop" className="navLinkDev navText">Workforce Development</NavLink>
       </div>
    );
}
 
export default Navigation;