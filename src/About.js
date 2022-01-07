import React from "react";
import "./About.css";
import Header from "./Header";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { useHistory } from "react-router";

function About() {
  const history = useHistory();
  return (
    <div className="about">
      <Header />
      <div className="about__container">
        <p>
          Take the stress out of baking and choose ready-made cakes to decorate
          for your special event from our selection available at The Cake
          Decorating Company. Whether you don’t have the time to bake a cake
          from scratch, or you just want to enjoy the fun of decorating a cake,
          then we have the perfect range of ready-made cakes to suit you.
          Explore a range of delicious flavours, including vanilla, chocolate
          and lemon cakes in a variety of shapes and sizes available. Once you
          have found the perfect ready-made cake, explore our cake decorating
          supplies where you can find butter creams, decorations and toppers to
          create your bespoke masterpiece.
        </p>

        <div className="about__order">
          <p>Order online and get a free delivery on orders over £40.</p>
          <div
            className="suggested__btn"
            onClick={() => history.push("/contact")}
          >
            <p>Email Us</p>
            <MailOutlineIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
