import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" ,height:"250px"}} />
      <div className="f-content">
        <span>elbobokabo@gmail.com</span>
        <div className="f-icons">
                    <a href="https://github.com/abk2035" target="_blank" rel="noopener noreferrer"><Gitub color="white" size={"3rem"} /></a>
                    <a href="https://www.linkedin.com/in/borele-kengne-8b6914241"><LinkedIn color="white" size={"3rem"} /> </a>
                      <a href="https://www.instagram.com/borelekengne" target="_blank" rel="noopener noreferrer">
                       <Insta color="white" size={"3rem"} />  
                      </a> 
        </div>
      </div>
    </div>
  );
};

export default Footer;
