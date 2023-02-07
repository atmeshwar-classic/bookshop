import { useState } from "react";
import "./App.css";
import Navbar from "./components/navBar/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
      <h1>Bookshop</h1>
    </div>
  );
}

export default App;
