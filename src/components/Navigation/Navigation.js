import React from 'react';
import "./Navigation.css";
import niccsLogo from "../../images/logo-dark.png";
import search from "../../images/search-dark.png";
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div className="navDiv">
          <NavLink to="/" className="navLinkHome navText">
             <img src={niccsLogo} id="niccsLogo" alt="National Initiative for Cybersecurity Careers and Studies" />
             <h2 id="niccsSlogan">National Initiative for Cybersecurity Careers and Studies</h2>
            </NavLink>
          <br/>
          <NavLink to="/training" className="navLinkTraining navText">Training</NavLink>
          <NavLink to="/education" className="navLinkEdu navText">Formal Education</NavLink>
          <NavLink to="/develop" className="navLinkDev navText">Workforce Development</NavLink>
          <NavLink to="/about" className="navLinkAbout navText">About NICCS</NavLink>
         <img src={search} alt="Search Button" id="search" />
          
       </div>
    );
}
 
export default Navigation;