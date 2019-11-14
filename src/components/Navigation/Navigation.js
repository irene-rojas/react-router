import React from 'react';
import "./Navigation.css";
import niccsLogo from "../../images/logo-dark.png";
import search from "../../images/search-dark.png";
 
import { Link } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div className="navDiv">
          <Link to="/" className="LinkHome navText">
             <img src={niccsLogo} id="niccsLogo" alt="National Initiative for Cybersecurity Careers and Studies" />
             <h2 id="niccsSlogan">National Initiative for Cybersecurity Careers and Studies</h2>
            </Link>
          <br/>
          <Link to="/training" className="LinkTraining navText">Training</Link>
          <Link to="/education" className="LinkEdu navText">Formal Education</Link>
          <Link to="/develop" className="LinkDev navText">Workforce Development</Link>
          <Link to="/about" className="LinkAbout navText">About NICCS</Link>
         <img src={search} alt="Search Button" id="search" />
          
       </div>
    );
}
 
export default Navigation;