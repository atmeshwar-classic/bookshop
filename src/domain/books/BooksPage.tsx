import { useDispatch, useSelector } from "react-redux";
import { BookCard } from "../../components/BookCard";
import { booksSelector, getBooks } from "./booksSlice";
import type { Book } from "./types";
import "./BooksPage.css";
import { useEffect } from "react";
import { AppDispatch } from "../../store/store";

export const BooksPage = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const { books, loading } = useSelector(booksSelector);

  useEffect(() => {
    dispatch(getBooks());
  }, []);
  
  return (
    <div className="book-page">
      {loading == "loading" ? (
        <div className="book-loading">Loading ...</div>
      ) : (
        <div className="book-page-container">
          <div className="book-page-container-flex">
            {books.map((book:Book) => (
              <BookCard key={book.id} {...book}/>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
