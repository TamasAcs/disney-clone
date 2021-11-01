import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";

function App() {

  return (
    <Router>
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
  </Router>
  );
}

export default App;
