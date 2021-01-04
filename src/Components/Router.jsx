import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Main from "../Screens/Main";
import Detail from "../Screens/Detail";
import Header from "./Header";

export default () => (
  <Router>
    <div className="router">
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/:id" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  </Router>
);
