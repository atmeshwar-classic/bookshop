import React from "react";
import { Route, Routes } from "react-router-dom";
import { BooksPage } from "../domain/books/BooksPage";
import { CartPage } from "../domain/cart/CartPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BooksPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default AppRoutes;
