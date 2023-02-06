import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { BookCard } from "../../components/BookCard";
import { booksSelector } from "./booksSlice";
import type { Book } from "./types";

export const BooksPage = (): JSX.Element => {
  const { books, loading } = useSelector(booksSelector);

  return (
    <div>
      <h1 className="ml-10 mt-10">Browse our book collection:</h1>
      <ToastContainer draggable />
      {loading == "loading" ? (
        <div className="grid justify-items-center content-center mt-20">
          <div className="relative">
            <div className="w-20 h-20 border-purple-200 border-2 rounded-full"></div>
            <div className="w-20 h-20 border-purple-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
          </div>

          <div className="relative">
            <div className="w-10 h-10 border-purple-200 border-2 rounded-full"></div>
            <div className="w-10 h-10 border-purple-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
          </div>

          <div className="relative">
            <div className="w-5 h-5 border-purple-200 border-2 rounded-full"></div>
            <div className="w-5 h-5 border-purple-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
          </div>
        </div>
      ) : (
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {books.map((book: Book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
