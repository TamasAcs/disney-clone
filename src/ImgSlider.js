import React from "react";
import "./ImgSlider.css";
import cake1 from "./images/slider-cake1.webp";
import cake2 from "./images/slider-cake2.webp";
import cupcake1 from "./images/slider-cupcake1.webp";
import cupcake2 from "./images/slider-cupcake2.webp";

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
          <img src={cake1} alt="" />
        </div>
      </div>
      <div className="imgSlider__wrap">
        <div className="imgSlider__wrapEach">
          <img src={cake2} alt="" />
        </div>
      </div>
      <div className="imgSlider__wrap">
        <div className="imgSlider__wrapEach">
          <img src={cupcake1} alt="" />
        </div>
      </div>
      <div className="imgSlider__wrap">
        <div className="imgSlider__wrapEach">
          <img src={cupcake2} alt="" />
        </div>
      </div>
    </Slider>
  );
}

export default ImgSlider;
