import { cartSelector, removeFromCart, getTotals } from "./cartSlice";
import { Link } from "react-router-dom";
import { CartItem } from "./types";
import { useEffect } from "react";
import { ToastContainer} from 'react-toastify'
import { useAppDispatch, useAppSelector } from "../../store.hooks";
const CartPage = (): JSX.Element => {
  const cart = useAppSelector(cartSelector);
  const dispatch = useAppDispatch();

  const handleRemoveFromCart = (cartItem: CartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <div className="cart-container">
      <ToastContainer/>
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                <div className="cart-item" key={cartItem.id}>
                  <div className="cart-product">
                    <img src={cartItem.image} alt={cartItem.name} />
                    <div>
                      <h3>{cartItem.name}</h3>
                      <p>{cartItem.description}</p>
                    </div>
                  </div>
                  <div className="cart-product-price">${cartItem.price}</div>
                  <div className="cart-product-quantity">
                    <div className="count">{cartItem.cartQuantity}</div>
                  </div>
                  <div>
                    <button style={{ backgroundColor: "#FFF", border: "1px solid #FFF" }} onClick={() => handleRemoveFromCart(cartItem)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="red" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </button>
                  </div>
                </div>

              ))}
          </div>
          <div className="cart-summary">
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Total</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartPage