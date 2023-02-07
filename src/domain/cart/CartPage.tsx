import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { cartSelector, removeFromCart } from "./cartSlice";
import "./CartPage.css";

export const CartPage = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const cartItems = useSelector(cartSelector);
  const totalAmount = cartItems.reduce(
    (acc, curr) => (acc += curr.price * curr.quantity),
    0
  );
  console.log(totalAmount);

  return (
    <div className="cart-page">
      {cartItems.length !== 0 ? (
      <>
        <table>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.author}</td>
              <td>{item.description}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </table>
        <div className="cart-total">Total: <span>${totalAmount}</span></div>
        </>
      ) : (
        <div className="empty-cart">Your cart is empty</div>
      )}
    </div>
  );
};
