import { useDispatch } from "react-redux";
import type { Book } from "../../domain/books/types";
import "./style.css";
import { addCart } from "../../domain/cart/cartSlice";

interface BookProps {
  singlebook: Book;
}

export const BookCard = ({ singlebook }: BookProps): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <div className="bookcard-container">
      <div className="bookcard-name">{singlebook.name}</div>
      <div className="bookcard-other-prop-cont">
        <p>Author - {singlebook.author}</p>
        <p>Descp - {singlebook.description}</p>
        <p>Price - {singlebook.price}$</p>
      </div>
      <span
        className="bookcard-add-button"
        onClick={() => dispatch(addCart(singlebook))}
      >
        +
      </span>
    </div>
  );
};
