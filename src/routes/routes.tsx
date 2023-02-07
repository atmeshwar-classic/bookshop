import { Route } from "react-router-dom";
import { BooksPage } from "../domain/books/BooksPage";
import { CartPage } from "../domain/cart/CartPage";

const createRoutes = () => {
  return (
    <>
      <Route path="/" element={<BooksPage />} />
      <Route path="/books" element={<BooksPage />} />
      <Route path="/cart" element={<CartPage />} />
    </>
  );
};

export default createRoutes;
