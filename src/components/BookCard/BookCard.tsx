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

  const dispatch:AppDispatch = useDispatch();

  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="overflow-hidden rounded-lg shadow-lg">
        <a href="#">
          <img alt="Cover Page" className="block h-auto w-full" />
        </a>
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <a className="no-underline hover:underline text-black" href="#">
              {props.name}
            </a>
          </h1>
          <p className="text-grey-darker text-sm">${props.name}</p>
        </header>

        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <a
            className="flex items-center no-underline hover:underline text-black"
            href="#"
          >
            <p className="ml-2 text-sm">{props.author}</p>
          </a>
          <a
            className="no-underline text-grey-darker hover:text-red-dark"
            href="#"
          >
            <button onClick={() => dispatch(addToCart(props))}>Add to Cart</button>
          </a>
        </footer>
      </article>
    </div>
  );
};
