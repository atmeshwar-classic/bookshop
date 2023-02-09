import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import { booksSelector, getBooks } from "./booksSlice";
import type { Book } from "./types";
import { BookCard } from "../../components/BookCard";
import "./BooksPage.css";

export const BooksPage = (): JSX.Element => {

  const dispatch: AppDispatch = useDispatch();
  const { books, loading } = useSelector(booksSelector);

  useEffect(() => {
    // fetch latest books
    dispatch(getBooks());
  }, []);

  return (
    <div className="books-page-wrapper">
      {loading === "loading" ? (
          <span className="book-loading">grabbing books</span>
        ) : (
          <div className="books-page-container">
            {books.map((book: Book) => (
              <BookCard 
                {...book} 
                key={book.id}
              />
            ))}
          </div>
        )
      }
    </div>
  );
};
