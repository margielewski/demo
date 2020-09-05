import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Characters from "./views/Characters";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/">
            <Characters />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
