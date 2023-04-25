import { useState } from "react";
import { BooksPage } from "../../domain/books/BooksPage";
import type { Book } from "../../domain/books/types";
import { CartPage } from "../../domain/cart/CartPage";
import { HashRouter as Router, Route, Link, Routes } from "react-router-dom";

/* 
  We would define the structure of the props in the same file as the component.
  Since, this component has the same props as Type Book, we would assign it to it props.
*/
// interface BookProps {
//   books: Book[];
// }

export const BookCard = (): JSX.Element => {
  const [bookData, setBookData] = useState<Book[]>([]);

  const handleClick = (e: React.MouseEvent, book: Book) => {
    // console.log("hello there!!!:", book);
    setBookData([...bookData, book]);
  };

  return (
    <Router>
      <header className="header">
        <nav>
          <Link to="/books">
            <button  className="btn">Books</button>
          </Link>
          <Link to="/cart">
            <button className="btn">Cart</button>
          </Link>
        </nav>
      </header>
      <Routes>
        <Route
          path="/books"
          element={<BooksPage handleClick={handleClick} />}
        />
        <Route path="/cart" element={<CartPage books={bookData} />} />
      </Routes>
    </Router>
  );
};
