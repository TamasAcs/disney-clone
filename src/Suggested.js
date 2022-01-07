import React from "react";
import "./Suggested.css";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {useHistory} from "react-router";

function Suggested() {
  const history = useHistory();

  return (
    <div className="suggested">
      <h2>DO YOU HAVE AN IDEA ?</h2>
      <div className="suggested__btn" onClick={() => history.push("/contact")}>
        <p>Email Us</p>
                    <MailOutlineIcon/>
                  </div>
      <h3>OR IF YOU DO NOT KNOW WHAT YOU AFTER THEN</h3>
      <h1>SHOP NOW</h1>
    </div>
  );
}

export default Suggested;
