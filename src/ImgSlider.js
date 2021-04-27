import React from "react";
import "./ImgSlider.css";
import badging from "./images/slider-badging.jpg";
import scale from "./images/slider-scale.jpg";
import badag from "./images/slider-badag.jpg";
import scales from "./images/slider-scales.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImgSlider(props) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    };
    

  return (
    
      <Slider {...settings} className="imgSlider__carousel">
      <div className="imgSlider__wrap">
        <div className="imgSlider__wrapEach">
          <img src={badging} alt="" />
          </div>
        </div>
      <div className="imgSlider__wrap">
        <div className="imgSlider__wrapEach">
          <img src={scale} alt="" />
          </div>
        </div>
        <div className="imgSlider__wrap">
          <div className="imgSlider__wrapEach">
          <img src={badag} alt="" />
          </div>
        </div>
        <div className="imgSlider__wrap">
          <div className="imgSlider__wrapEach">
          <img src={scales} alt="" />
          </div>
        </div>
        </Slider>
  );
}

export default ImgSlider;
