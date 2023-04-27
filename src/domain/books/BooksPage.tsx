import { useDispatch, useSelector } from "react-redux";
import "./BookPage.css"
import { BooksState } from "./types";
import { booksSelector, getBooks } from "./booksSlice";
import { useEffect } from "react";
import { AppDispatch } from "../../store/store";
import { BookCard } from "../../components/BookCard";



export const BooksPage = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getBooks());
  },[]);

  const booksData: BooksState = useSelector(booksSelector);
  const { books, loading } = booksData;

  return loading === "loaded" ? (
    <div className="bookPage">
     <BookCard books={books}/>
    </div>
  ) : loading === "not loaded" ? (
    <>not loaded...</>
  ) : (
    <>loading...</>
  );
};
