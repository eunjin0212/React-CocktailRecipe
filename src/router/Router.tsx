import { HashRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import Main from "../screens/Main";

const Routers = () => (
  <Router>
    <Routes>
      <Route path="/" Component={Main} />
    </Routes>
  </Router>
);
export default Routers;
