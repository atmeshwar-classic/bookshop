import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { Book } from "../../types";

export const BookItem = (book: Book): JSX.Element => {

  const dispatch: AppDispatch = useDispatch();
  const { bookTitle, bookAuthor, bookDescription, bookPrice } = book;

  return (
    <div className="book-card">
      <div className="book-image">
        <img alt={bookTitle.toLowerCase()} loading="lazy" />
      </div>
      <div className="book-about">
        <h3 className="book-title">
          {bookTitle.toLowerCase()}
        </h3>
        <p className="book-author">
          {bookAuthor.toLowerCase()}
        </p>
        <p className="book-desc">
          {bookDescription.toLowerCase()}
        </p>
        <div className="book-price">
          <span className="book-price">
            ₹{bookPrice}
          </span>
          <button type="button" className='cart-add-button' onClick={() => { dispatch(addToCart(book)) }}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}