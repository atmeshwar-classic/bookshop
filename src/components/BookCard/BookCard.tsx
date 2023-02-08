import type { Book } from "../../domain/books/types";
import "./styles.css";
import { useDispatch } from "react-redux";
import { addBookToCart } from "../../domain/cart/cartSlice";
/* 
  We would define the structure of the props in the same file as the component.
  Since, this component has the same props as Type Book, we would assign it to it props.
*/
type BookProps = Book;

export const BookCard = (book: BookProps): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div className="card-container" key={book.id}>
      <div className="book-img">
        <h4>Book Image</h4>
        <div
          className="add-button"
          onClick={() => dispatch(addBookToCart(book))}
        >
          <strong>+</strong>
        </div>
      </div>
      <h5>Title: {book.name}</h5>
      <h5>Author: {book.author}</h5>
      <h6>Description: {book.description}</h6>
      <p>$ {book.price}</p>
    </div>
  );
};
