import React, { useEffect } from "react";
import "./App.css";
import LoginScreen from "./LoginScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import { login, selectUser } from "./features/userSlice";
import Home from "./Home";
import Detail from "./Detail";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: useDispatch.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <Router>
      {!user ? (
        <LoginScreen />
      ) : (
        <div className="app">
          <Switch>
          <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/detail/:id">
              <Detail />
            </Route>
          </Switch>
        </div>
      )}
    </Router>
  );
}

export default App;
