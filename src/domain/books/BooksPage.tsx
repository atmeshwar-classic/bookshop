import React, { useEffect, useState } from "react";
import { BookCard } from "../../components/BookCard";
import { getBooks } from "./booksSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import type { Book } from "../../domain/books/types";
import { Skeleton } from "antd";
import "./style.css";

const BooksPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const Bookdata = useSelector((state: RootState) => state.books.books);
  const [bookData, setBookData] = useState<Book[]>(Bookdata);
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  useEffect(() => {
    setBookData(Bookdata);
  }, [Bookdata]);

  return (
    <div className="book-page-container">
      {bookData.length != 0 ? (
        <div className="book-list">
          {bookData?.map((singlebook: Book) => {
            return (
              <>
                <BookCard singlebook={singlebook} key={singlebook.id} />
              </>
            );
          })}
        </div>
      ) : (
        <div className="book-list-loading">
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
        </div>
      )}
    </div>
  );
};

export default BooksPage;
