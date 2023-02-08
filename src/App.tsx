import { Routes, Route } from "react-router-dom";
import "./App.css";
import { BooksPage } from "./domain/books/BooksPage";
import { CartPage } from "./domain/cart/CartPage";
import Navbar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
