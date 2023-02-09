import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { cleanupBooks, getBooks } from "./booksSlice";

import { AppDispatch, RootState } from "../../store/store";
import { Book } from "./types";
import { BookCard } from "../../components/BookCard";
import { addBookItemsTocart } from "../cart/cartSlice";
export const BooksPage = (): JSX.Element => {
  const { books: booksData } = useSelector((state: RootState) => state.books);
  const [data, setData] = useState<Book[]>([]);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
    return () => {
      dispatch(cleanupBooks);
    };
  }, [getBooks]);
  useEffect(() => {
    setData(booksData);
  }, [booksData]);
  const addToCart=(items:Book)=>{
    const {id, name, author, description, price } = items;
    const cartData= {id, name, author, description, price }
    dispatch(addBookItemsTocart(cartData));
  }
  return (
    <div className="books_main">
      {data?.map((bookItem: Book) => {
        return (
          <div key={bookItem.id} className="books_sub">
            <BookCard
              id={bookItem.id}
              name={bookItem.name}
              author={bookItem.author}
              description={bookItem.description}
              price={bookItem.price}
              onClickPluse={addToCart}
            />
          </div>
        );
      })}
    </div>
  );
};
