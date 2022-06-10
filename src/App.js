import logo from "./logo.svg";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import LocationEntry from "./components/locationentry";
import NavBar from "./components/navbar";
import PageHeader from "./components/Header";
import SimpleMap from "./components/simpleMap";
import React, { Component } from "react";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App index-page sidebar-collapse">
        <NavBar />
        <PageHeader />
        <div>
          <Switch>
            <Route path="/" component={LocationEntry} />
            {/* <Route path="/" component={NavBar} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
