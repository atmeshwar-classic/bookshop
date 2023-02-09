import { useState } from "react";
import "./App.css";

import Navbar from "./components/navBar/Navbar";
import { CartCard } from "./domain/cart/CartCard";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="App container">
      <Navbar />
      <AppRoutes />
      {/* <CartCard
        id={"123"}
        name={"cartitem.name"}
        description={"cartitem.description"}
        price={34}
      /> <CartCard
        id={"123"}
        name={"cartitem.name"}
        description={"cartitem.description"}
        price={34}
      /> */}
    </div>
  );
}

export default App;
