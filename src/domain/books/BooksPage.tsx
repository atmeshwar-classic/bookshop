import { useDispatch, useSelector } from "react-redux";
import { BookCard } from "../../components/BookCard";
import { useEffect } from "react";
import "./styles.css";
import { AppDispatch } from "../../store/store";
import { booksSelector, getBooks } from "./booksSlice";

export const BooksPage = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const Bookdata = useSelector(booksSelector);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const renderBooks = () => {
    if (Bookdata.loading === "loaded") {
      return (
        <div className="book-list">
          {Bookdata.books.map((book) => (
            <BookCard {...book} key={book.id} />
          ))}
        </div>
      );
    } else if (Bookdata.loading === "loading") {
      return <div>{Bookdata.loading}...</div>;
    } else {
      return <div>An error occured...</div>;
    }
  };

  return <div className="book-page-container">{renderBooks()}</div>;
};
