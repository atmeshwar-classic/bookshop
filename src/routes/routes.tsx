import { Route, Routes } from "react-router-dom";
import { BooksPage } from "../domain/books/BooksPage";
import { CartPage } from "../domain/cart/CartPage";
import NotFound from "../NotFound";

const Routings = () => {
  return (
    <Routes>
      <Route path="/" element={<BooksPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routings;
