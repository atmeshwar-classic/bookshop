import { booksSelector, getBooks } from "./booksSlice";
import { Book } from "./types";
import { BookCard } from "../../components/BookCard";
import { ToastContainer } from 'react-toastify'
import { useAppDispatch, useAppSelector } from "../../store.hooks";
import "./bookspage.styles.css"
import { useEffect } from "react";

const BooksPage: React.FunctionComponent = () => {
  const { books: books, loading } = useAppSelector(booksSelector)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getBooks())
  }, [])

  const renderContent = () => {
    if (loading === "loaded") {
      return (
        <>
          <h2>New Books Arrivals</h2>
          <div className="books">
            {books &&
              books?.map((book: Book) => (
                <BookCard {...book} key={book.id}/>
              )
              )}
          </div>
        </>
      )
    }
    else if (loading === "loading") {
      return (
        <p>Loading...</p>
      )
    }
    else {
      return (
        <p>Unexpected error occured...</p>
      )
    }
  }
  return (
    <div className="home-container">
      {renderContent()}
    </div>
  );
}

export default BooksPage