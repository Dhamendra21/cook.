import React from "react";
import Nav from "./components/Nav";
import { Routes } from "react-router-dom";
import Router from "./utils/Router";
const App = () => {
  return (
    <div>
      <Nav />
      <Router />
    </div>
  );
};

export default App;
