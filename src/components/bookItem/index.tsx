import { useDispatch } from "react-redux";
import { addToCart } from "../../routes/cart/cart.reducer";
import type { AppDispatch } from "../../store/store";
import { Book } from "../../types";
import "./bookItem.styles.css";

export const BookItem = (book: Book): JSX.Element => {

  const dispatch: AppDispatch = useDispatch();
  const { bookTitle, bookAuthor, bookDescription, bookPrice, bookImgUrl } = book;

  return (
    <div className="book-item">
      <div className="book-image">
        <img src={bookImgUrl} width={180} height={120} alt={bookTitle.toLowerCase()} loading="lazy" />
        <button type="button" className='cart-add-button' onClick={() => { dispatch(addToCart(book)) }}>+</button>
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
        <p className="book-price">
          ₹{bookPrice}
        </p>
      </div>
    </div>
  );
}