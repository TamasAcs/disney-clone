import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import About from "./About";
import Contact from "./Contact";
import {CakesProvider} from "./CakesContext"

function App() {

  return (
    <Router>
      <CakesProvider>
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
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
        </CakesProvider>
  </Router>
  );
}

export default App;
