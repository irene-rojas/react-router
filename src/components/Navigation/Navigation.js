import React from 'react';
import "./Navigation.css";
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div className="navDiv">
          <NavLink to="/" className="navLinkHome">Home</NavLink>
          <br/>
          <NavLink to="/about" className="navLinkAbout">About</NavLink>
          <br/>
          <NavLink to="/training" className="navLinkContact">Training</NavLink>
          <br/>
          <NavLink to="/education" className="navLinkContact">Education</NavLink>
          <br/>
          <NavLink to="/develop" className="navLinkContact">Workforce Development</NavLink>
       </div>
    );
}
 
export default Navigation;