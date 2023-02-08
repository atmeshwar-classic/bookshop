import { useDispatch, useSelector } from "react-redux";
import { BookCard } from "../../components/BookCard";
import { books } from "./books";
import { useEffect, useState } from "react";
import "./styles.css";
import { AppDispatch } from "../../store/store";
import { booksSelector, getBooks } from "./booksSlice";
import { Book } from "./types";

export const BooksPage = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const Bookdata = useSelector(booksSelector);

  const [booksData, setBooksData] = useState<Book[]>(Bookdata);

  useEffect(() => {
    dispatch(getBooks());
  }, []);
  useEffect(() => {
    setBooksData(Bookdata);
  }, [Bookdata]);

  return (
    <div className="book-page-container">
      {booksData.length === 0 ? (
        <div>Loading...</div>
      ) : (
        booksData.map((book) => <BookCard key={book.id} {...book} />)
      )}
    </div>
  );
};