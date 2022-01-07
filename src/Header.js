import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "./images/logo.png";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { useHistory } from "react-router";
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
  const history = useHistory();
  const [show, handleShow] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

const toggleNav = () => {
  setToggleMenu(!toggleMenu)
}

  const transitionHeader = () => {
    if (window.scrollY > 80) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionHeader);
    return () => window.removeEventListener("scroll", transitionHeader);
  }, []);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', changeWidth)
  }, []);


  return (
    <div className={`header ${show && "header__black"}`}>
      <div className="header__left">
        <div className="header__logo">
          <img onClick={() => history.push("/home")} src={logo} alt="logo" />
        </div>
      </div>
      {(toggleMenu || screenWidth > 560) && (
      <div className="header__right">
        <div onClick={() => history.push("/home")} className="right">
          <h5>HOME</h5>
        </div>
        <div onClick={() => history.push("/about")} className="right">
          <h5>ABOUT US</h5>
        </div>
        <div onClick={() => history.push("/contact")} className="right">
          <MailOutlineIcon className="header__navIcons" />
          <h5>CONTACT US</h5>
        </div>
      </div>
      )}
      <div className="header__menuIcon">
      <MenuIcon onClick={toggleNav} className="header__menuIcon"/>
      </div>
    </div>
  );
}

export default Header;
