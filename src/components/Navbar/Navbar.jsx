import React from 'react';
import Toggle from '../Toggle/Toggle';
import './Navbar.css' ;
import { Link } from "react-scroll";


const Navbar = () => {
  return (
    <div className="n-wrapper">
        {/*left*/}
        <div className="n-left">
         <div className="n-name">Arnold</div>
         <Toggle />
        </div>
        {/* right */}
        <div className="n-right">
          <div className="n-list">
            <ul>
              <li>
                <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="services" spy={true} smooth={true}>
                  Serivces
                </Link>
              </li> 
              <li>
                <Link to="experience" spy={true} smooth={true}>
                  Experience
                </Link>
              </li>
              <li>
                <Link to="portfolio" spy={true} smooth={true}>
                  Protfolio
                </Link>
              </li> 
            </ul>
          </div>
          <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact </button>
        </Link>
        </div>
    </div>
  )
}


export default Navbar;
