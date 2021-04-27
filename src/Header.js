import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Header.css";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import logo from "./images/logo.png";
import homeIcon from "./images/home-icon.svg";
import searchIcon from "./images/search-icon.svg";
import watchListIcon from "./images/watchlist-icon.svg";
import originalsIcon from "./images/original-icon.svg";
import moviesIcon from "./images/movie-icon.svg";
import seriesIcon from "./images/series-icon.svg";
import { useHistory } from "react-router";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const [show, handleShow] =useState(false)

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

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
    history.push("/");
  };

  return (
    <div className={`header ${show && "header__black"}`}>
      <div className="header__left">
        <div className="header__logo">
          <img onClick={() => history.push("/home")} src={logo} alt="logo" />
        </div>
      </div>
      <div className="header__middle">
        <div
          onClick={() => history.push("/home")}
          className="middle header__navHome"
        >
          <img className="header__navIcons" src={homeIcon} alt="logo" />
          <h5>HOME</h5>
        </div>
        <div className="middle header__navHSearch">
          <img className="header__navIcons" src={searchIcon} alt="logo" />
          <h5>SEARCH</h5>
        </div>
        <div className="middle header__navWatchList">
          <img className="header__navIcons" src={watchListIcon} alt="logo" />
          <h5>WATCHLIST</h5>
        </div>
        <div className="middle header__navOriginals">
          <img className="header__navIcons" src={originalsIcon} alt="logo" />
          <h5>ORIGINALS</h5>
        </div>
        <div className="middle header__navMovies">
          <img className="header__navIcons" src={moviesIcon} alt="logo" />
          <h5>MOVIES</h5>
        </div>
        <div className="middle header__navSeries">
          <img className="header__navIcons" src={seriesIcon} alt="logo" />
          <h5>SERIES</h5>
        </div>
      </div>
      <div className="header__right">
        <Avatar
          src={user?.photoUrl}
          className="header__avatar"
        />
        <div onClick={signOut} className="header__dropdown">Sign Out</div>
      </div>
    </div>
  );
}

export default Header;
