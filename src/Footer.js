import React from "react";
import { useHistory } from "react-router";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import logo from "./images/logo.png";

function Footer() {
  const history = useHistory();
  return (
    <div className="footer">
      <div className="footer__container">
        <img onClick={() => history.push("/home")} src={logo} alt="logo" />
        <div className="footer__address">
          <p>21 Uphill Road</p>
          <p>SE02 3AK</p>
          <p>London</p>
          <p>We are open from Monday - Friday</p>
          <p>08:00am - 05:00pm</p>
          <p>Call Us: +44 7 123 456 78</p>
        </div>
        <div className="footer__socialIcons">
          <FacebookIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </div>
      </div>

      <div className="footer__allRights">© 2021 Sweet Craft. All Rights reserved.</div>
    </div>
  );
}

export default Footer;
