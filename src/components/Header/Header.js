import React from 'react';
import "./Header.css";
 
import { NavLink } from 'react-router-dom';
 
const Header = () => {
    return (

       <div className="masthead">
         
         

         <header className="headerDiv">
            
            <NavLink to="/" className="navLinkHome">Home</NavLink>
            <br/>
            <NavLink to="/about" className="navLinkAbout">About</NavLink>
            <br/>
            <NavLink to="/training" className="navLinkContact">Training</NavLink>
            <br/>
            <NavLink to="/education" className="navLinkContact">Education</NavLink>
            <br/>
            <NavLink to="/develop" className="navLinkContact">Workforce Development</NavLink>
         </header>
       </div>

    );
}
 
export default Header;