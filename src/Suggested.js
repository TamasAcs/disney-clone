import React from "react";
import "./Suggested.css";
import disney from "./images/viewers-disney.png";
import pixar from "./images/viewers-pixar.png";
import marvel from "./images/viewers-marvel.png";
import starwars from "./images/viewers-starwars.png";
import national from "./images/viewers-national.png";
import disneyVideo from "./videos/disney.mp4";
import pixarVideo from "./videos/pixar.mp4";
import marvelVideo from "./videos/marvel.mp4";
import starwarsVideo from "./videos/star-wars.mp4";
import nationalVideo from "./videos/national-geographic.mp4";

function Suggested() {
  return (
    <div className="suggested">
      <div className="suggested__card">
        <img src={disney} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={disneyVideo} type="video/mp4" />
        </video>
      </div>
      <div className="suggested__card">
        <img src={pixar} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={pixarVideo} type="video/mp4" />
        </video>
      </div>
      <div className="suggested__card">
        <img src={marvel} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={marvelVideo} type="video/mp4" />
        </video>
      </div>
      <div className="suggested__card">
        <img src={starwars} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={starwarsVideo} type="video/mp4" />
        </video>
      </div>
      <div className="suggested__card">
        <img src={national} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={nationalVideo} type="video/mp4" />
        </video>
          </div>
    </div>
  );
}

export default Suggested;
