import type { Book } from '../../domain/books/types'
import { books } from '../../domain/books/books';
import "./styles.css"
import { useDispatch } from 'react-redux';
import { addBookToCart } from '../../domain/cart/cartSlice';
/* 
  We would define the structure of the props in the same file as the component.
  Since, this component has the same props as Type Book, we would assign it to it props.
*/
type BookProps = Book;
// interface BookProps {
//   Book: Book;
// }

export const BookCard = ( book : BookProps): JSX.Element => {

  const dispatch = useDispatch();
  
  return (
    <div className='card-container' key={book.id}>
    <div className='book-img'>Book Image</div>
    <h5>{book.name}</h5>
    <h5>{book.author}</h5>
    <p>{book.description}</p>
    <p>{book.price}</p>
    <button onClick={() => dispatch(addBookToCart(book))}
    >Add to Cart</button>
    </div>
  )
}