import { useDispatch } from "react-redux";
import type { Book } from "../../domain/books/types";
import { addToCart } from "../../domain/cart/cartSlice";
import type { AppDispatch } from "../../store/store";
/* 
  We would define the structure of the props in the same file as the component.
  Since, this component has the same props as Type Book, we would assign it to it props.
*/
type BookProps = Book;

export const BookCard = (props: BookProps): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className="book-card">
      <div className="book-card-img">
        <img alt="Cover Page" />
      </div>
      <div className="book-card-contents">
        <h1>{props.name}</h1>
        <h3>{props.author}</h3>
        <p>{props.description}</p>
        <p>${props.price}</p>
      </div>
      <div className="book-card-btn">
        <button onClick={() => dispatch(addToCart(props))}>Add to Cart</button>
      </div>
    </div>
  );
};
