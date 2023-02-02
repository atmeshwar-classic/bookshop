import React, { useEffect, useState } from "react";
import { BookCard } from "../../components/BookCard";
import { getBooks } from "./booksSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import type { Book } from "../../domain/books/types";
import "./style.css";

const BooksPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const Bookdata = useSelector((state: RootState) => state);
  const [bookData, setBookData] = useState<Book[]>(Bookdata.books.books);
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  useEffect(() => {
    setBookData(Bookdata.books.books);
  }, [Bookdata]);

  return (
    <div className="book-page-container">
      <div className="book-list">
        {bookData?.map((singlebook: Book) => {
          return (
            <>
              <BookCard singlebook={singlebook} key={singlebook.id} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default BooksPage;
