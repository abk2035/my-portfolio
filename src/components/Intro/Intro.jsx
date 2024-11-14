import React ,{ useContext } from 'react';
import './Intro.css' ;
import Github from '../../img/github.png' ;
import LinkedIn from '../../img/linkedin.png' ;
import Instagram from '../../img/instagram.png' ;
import Vector1 from '../../img/Vector1.png';
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
// import portfolio_profile from"../../img/portfolio_profile.png"
import glassesimoji from '../../img/glassesimoji.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import FloatinDiv from '../FloatingDiv/FloatingDiv';
import { motion } from "framer-motion";
import { themeContext } from "../../Context";


const Intro = ()=>{
     // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

   // Transition
   const transition = { duration: 2, type: "spring" };

    return (
        <div className="Intro">
            <div className="i-left">
                <div className="i-name">
                    {/* abk change hy darkmode  */}
                    <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
                    <span>Arnold Borele K.</span>
                    <span style={{fontSize:'20px',lineHeight: '1.5'}}>
                        junior Software Engineer with middle level of experience in web and
                        <br/> mobile
                        application development,
                        <br/>producting the Quality work
                    </span>
                </div>
                <button className="button i-button">Hire me</button>
                {/* social icons */}
                <div className="i-icons">
                   <a href="https://github.com/abk2035" target="_blank" rel="noopener noreferrer"><img src={Github} alt="github-icon" /></a>
                    <a href="https://www.linkedin.com/in/borele-kengne-8b6914241"><img src={LinkedIn} alt="linkedin-icon" /></a>
                    <a href="https://www.instagram.com/borelekengne" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="insta-icon" /></a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                {/* <img src={portfolio_profile} alt="" height='320' width='180' className='lastImg' />   */}
              {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv can change with dark mode  */}
          <FloatinDiv img={thumbup} text1="Mobile" text2="Developper" />
        </motion.div>

            </div>
        </div>

    )


}

export default Intro ;