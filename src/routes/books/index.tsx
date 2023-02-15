import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BookItem } from "../../components/bookItem";
import { AppDispatch } from "../../store/store";
import { Book, BooksState } from "../../types";
import { booksSelector, getBooks } from "./book.reducer";
import "./book.styles.css";

export const BooksMain = (): JSX.Element => {

  const dispatch: AppDispatch = useDispatch();
  const { books, loading } = useSelector(booksSelector);

  useEffect(() => {
    // fetch latest books
    dispatch(getBooks());
  }, []);

  return (
    <div className="books-page-wrapper">
      {loading === "loading" ? (
        <span className="book-loading">loading ...</span>
      ) : (
        <div className="books-page-container">
          {books.map((book: Book) => (
            <BookItem
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
