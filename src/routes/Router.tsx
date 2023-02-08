import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import { BooksPage } from "../domain/books/BooksPage";
import { CartPage } from "../domain/cart/CartPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;