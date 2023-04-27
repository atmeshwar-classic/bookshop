import React from "react";
import "./App.css";
import NavBar from "./navbar/Navbar";
import Router from "./components/router/Router";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <NavBar/>
      <Router/>
    </HashRouter>
  );
}

export default App;
