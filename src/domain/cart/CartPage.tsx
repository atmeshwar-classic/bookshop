import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { cartSelector, removeFromCart } from "./cartSlice";
import "./CartPage.css";

export const CartPage = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const cartItems = useSelector(cartSelector);
  console.log("cart", cartItems);
  const totalAmount = cartItems.reduce(
    (acc, c) => (acc += (c.price, c.quantity)),
    0
  );
  console.log(totalAmount);

  return (
    <div className="cart-page">
      {cartItems.length !== 0 ? (
        <table>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.author}</td>
              <td>{item.description}</td>
              <td>${item.price}</td>
              <td>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </table>
      ) : (
        <div className="empty-cart">Your cart is empty</div>
      )}
    </div>
  );
};
