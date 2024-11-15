import React,{useContext} from 'react'
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import "swiper/css";
import { themeContext } from "../../Context";

const YoutubeEmbed = ({ embedLink }) => (
  <div className="video-responsive">
      <iframe
          width="853"
          height="480"
          src={`${embedLink}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
      />
  </div>
);

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

    return (
        <div className="portfolio" id="portfolio">
          {/* heading */}
          <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
          <span>Portfolio</span>
    
          {/* slider */}
        
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className="portfolio-slider"
          >
            <SwiperSlide>
              <YoutubeEmbed embedLink={'https://youtu.be/F-8ZaB9_o-w'}/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={MusicApp} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={HOC} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      );
}

export default Portfolio