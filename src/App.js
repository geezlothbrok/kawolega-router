import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Startups from "./pages/Startups";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    
  return (
    <div className="App">
      <BrowserRouter>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/startups" component={Startups} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}
}


