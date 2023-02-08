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
  }, [Bookdata]);

  return (
    <div className="book-page-container">
      <>{console.log(Bookdata)}</>
      {Bookdata.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="book-list">
          {Bookdata.map((book) => (
            <BookCard {...book} key={book.id} />
          ))}
        </div>
      )}
    </div>
  );
};
