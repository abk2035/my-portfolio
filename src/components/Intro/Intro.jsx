import React ,{ useContext } from 'react';
import './Intro.css' ;
import Github from '../../img/github.png' ;
import LinkedIn from '../../img/linkedin.png' ;
import Instagram from '../../img/instagram.png' ;
import Vector1 from '../../img/Vector1.png';
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from '../../img/glassesimoji.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import FloatinDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from "../../Context";


const Intro = ()=>{
     // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

    return (
        <div className="Intro">
            <div className="i-left">
                <div className="i-name">
                    {/* abk change hy darkmode  */}
                    <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
                    <span>Arnold Borele K.</span>
                    <span>
                        junior Software Developer with middle level of experience in web and mobile
                        application development, producting the Quality work
                    </span>
                </div>
                <button className="button i-button">Hire me</button>
                {/* social icons */}
                <div className="i-icons">
                    <img src={Github} alt="github-icon" />
                    <img src={LinkedIn} alt="linkedin-icon" />
                    <img src={Instagram} alt="insta-icon" />
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                 {/* animation */}
                 <FloatinDiv img={crown} text1="Web" text2="Developer" />

                {/* <motion.img
                initial={{ left: "-36%" }}
                whileInView={{ left: "-24%" }}
                transition={{ duration: 2, type: "spring" }}
                src={glassesimoji}
                alt=""
                /> */}
                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div
                className="blur"
                style={{
                    background: "#C1F5FF",
                    top: "17rem",
                    width: "21rem",
                    height: "11rem",
                    left: "-9rem",
                }}
                ></div>
            </div>

        </div>
    )


}

export default Intro ;