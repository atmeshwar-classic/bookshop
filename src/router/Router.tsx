import { Route, Routes } from "react-router-dom";
import { BooksPage } from "../domain/books/BooksPage";
import { CartPage } from "../domain/cart/CartPage";

function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<BooksPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}

export default Router;
