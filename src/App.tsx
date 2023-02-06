import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import BooksPage from "./domain/books/BooksPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartPage } from "./domain/cart/CartPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="/Cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
