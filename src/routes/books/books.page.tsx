import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BookItem } from "../../components/bookCard";
import Header from "../../components/header";
import { AppDispatch } from "../../store/store";
import { booksSelector, getBooks } from "./book.reducer";
import "./book.styles.css";
import { Book } from "./books.types";

export const BooksMain = (): JSX.Element => {

  const dispatch: AppDispatch = useDispatch();
  const { books, loading } = useSelector(booksSelector);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <>
      <Header />
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
    </>
  );
};
