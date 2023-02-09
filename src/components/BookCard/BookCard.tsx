import { useState } from "react";
import type { Book } from "../../domain/books/types";
import classes from "./../../styles/bookcard.module.css";
import bookpic from "./../../assets/book1.jpg";
import { AppDispatch } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, cartSelector } from "../../domain/cart/cartSlice";
import { CartItem } from "../../domain/cart/types";
/* 
We would define the structure of the props in the same file as the component.
Since, this component has the same props as Type Book, we would assign it to it props.
*/
type BookProps = Book;

export const BookCard = (props: BookProps): JSX.Element => {
  const [togglebutton, setToggleButton] = useState<boolean>(false);
  const cart = useSelector(cartSelector);
  const dispatch: AppDispatch = useDispatch();

  const onAddClickHandler = () => {
    console.log("clicked");
    if (!togglebutton) {
      dispatch(addToCart({ ...props }));
      setToggleButton(!togglebutton);
    }
  };

  return (
    <div className={classes.bookCardContainer}>
      <div className={classes.bookCardHeader}>
        <img src={bookpic}></img>
      </div>
      <div className={classes.bookCardDescription} key={props.id}>
        <h3>{props.name}</h3>
        <h3>{props.author}</h3>
        <h5>{props.description}</h5>
        <h2>{props.price} $</h2>
      </div>
      <div className={classes.BookAddicon}>
        <button
          disabled={togglebutton === true}
          onClick={onAddClickHandler}
        >
          {togglebutton ? (
            <i className="fa fa-minus"></i>
          ) : (
            <i className="fa fa-plus" aria-hidden="true"></i>
          )}
        </button>
      </div>
    </div>
  );
};

// extra
// const canBeAddedInCart=(currentid: string): boolean=> {
//   for(let item of cart){
//     if(item.id===currentid){
//       return false;
//     }
//   }
//   return true;
//   }

// }
