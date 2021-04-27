import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { auth, provider } from "./firebase";
import { login } from "./features/userSlice";
import "./LoginScreen.css";

function LoginScreen() {
    const dispatch = useDispatch();
    const signIn = () => {
      auth
        .signInWithPopup(provider)
        .then(({ user }) => {
          dispatch(
            login({
              displayName: user.displayName,
              email: user.email,
              photoUrl: user.photoURL,
            })
          );
        })
        .catch((error) => alert(error.message));
    };

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <div className="loginScreen__header">
          <div className="loginScreen__logo" />
          <Button
            onClick={signIn}
            className="loginScreen__loginButton"
          >
            <h4>LOGIN</h4>
          </Button>
        </div>

        <div className="loginScreen__body">
          <div className="loginScreen__logoTop" />
          <Button onClick={signIn} className="loginScreen_getAllButton">GET ALL THERE</Button>
          <p className="loginScreen__description">
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </p>
          <div className="loginScreen__logoBottom" />
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
