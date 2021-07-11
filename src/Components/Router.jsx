import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Main from "../Screens/Main";
import Header from "./Header";

const Routers = () => (
    <Router>
        <div className="router">
            <Header />
            <Switch>
                <Route exact path="/" component={Main} />
                <Redirect from="*" to="/" />
            </Switch>
        </div>
    </Router>
);
export default Routers;
