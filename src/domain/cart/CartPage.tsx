import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { CartItem } from "./types";
import { removeBookFromCart, cartSelector } from "./cartSlice";

export const CartPage = (): JSX.Element => {
  const cartData = useSelector(cartSelector);
  const dispatch = useDispatch();
  return (
    <>
      <div>Cart Page</div>
      {cartData.length === 0 ? (
        <></>
      ) : (
        <div>
          {cartData.map((cartitem: CartItem) => {
            return (
              <>
                <div>
                  {cartitem.name}
                  <button
                    onClick={() => dispatch(removeBookFromCart(cartitem.id))}
                  >
                    Remove Book
                  </button>
                </div>
                <br></br>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};
