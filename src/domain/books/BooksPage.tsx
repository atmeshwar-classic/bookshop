import { useDispatch, useSelector } from "react-redux";
import { BooksState } from "./types";
import { booksSelector, getBooks } from "./booksSlice";
import { useEffect } from "react";
import { AppDispatch } from "../../store/store";

type PropsFun = {
  handleClick: Function;
};

export const BooksPage = ({ handleClick }: PropsFun): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getBooks());
  },[]);

  const booksData: BooksState = useSelector(booksSelector);
  const { books, loading } = booksData;

  return loading === "loaded" ? (
    <div className="bookPage">
      {books.map((book, index) => (
        <div className="card" key={index}>
          <div>
            <h3 className="img">
              Book Image
              <span onClick={(e) => handleClick(e, book)}>
                +
              </span>
            </h3>
          </div>
          <div className="container">
            <p>{book.name}</p>
            <p>{book.author}</p>
            <br />
            <p>{book.description}</p>
            <br />
            <p>${book.price}</p>
          </div>
        </div>
      ))}
    </div>
  ) : loading === "not loaded" ? (
    <>not loaded...</>
  ) : (
    <>loading...</>
  );
};
