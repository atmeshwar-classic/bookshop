import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import RouterComponent from "./routes";

function App(): JSX.Element {
  return (
    <div>
      <div>
        <Header />
        <RouterComponent />
      </div>
    </div>
  );
}

export default App;
