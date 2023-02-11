import React from 'react';
import './Navbar.css' ;

const Navbar = () => {
  return (
    <div className="n-wrapper">
        {/*left*/}
        <div className="n-left">
         <div className="n-name">Arnold</div>
         <div>togle</div>
        </div>
        {/* right */}
        <div className="n-right">
          <div className="n-list">
            <ul>
              <li>
                  Home
              </li>
              <li>
                  service
              </li> 
              <li>
                  experience
              </li>
              <li>
              Portfolio
              </li> 
              <li>
              Testimonial
              </li>
              <button className='button n-button'>
                contact
              </button>
            </ul>
          </div>
        </div>
    </div>
  )
}


export default Navbar;
