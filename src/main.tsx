import React from "react";
import ReactDOM from "react-dom";

import "./styles/main.scss";
import App from "./App";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Switch>
        <Route path="/search">
          <App />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
