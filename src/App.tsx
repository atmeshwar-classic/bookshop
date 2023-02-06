
import "./App.css";
import { BooksPage } from "./domain/books/BooksPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartPage } from "./domain/cart/CartPage";
import Navbar from "./components/Navbar/Navbar";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  )
}

export default App;
