import "./CartPage.css";
import { useDispatch, useSelector } from "react-redux";
import { getBook, removeBook } from "./cartSlice";
import { createSelector } from "@reduxjs/toolkit";

export const CartPage = (): JSX.Element => {
  const dispatch = useDispatch();

  const cartData = useSelector(getBook);

  const getTotalPrice = createSelector([getBook], (books) => {
    return books.reduce((total, book) => total + book.price, 0);
  });

  const totalPrice = useSelector(getTotalPrice);

  const removeCart = (id: string) => {
    dispatch(removeBook(id));
  };

  return (
    <section>
      {cartData.map((book) => {
        return (
          <div className="cart" key={book.id}>
            <div className="description">
              <div
                className="img"
                style={{ width: "4rem", height: "3rem", margin: "0.5rem" }}
              ></div>
              <div style={{ paddingLeft: "1rem" }}>
                <h4>{book.name}</h4>
                <p>{book.description}</p>
              </div>
            </div>
            <div className="price">
              <p>${book.price}</p>
              <p
                style={{
                  paddingLeft: "2rem",
                  paddingRight: "1rem",
                  cursor: "pointer",
                }}
                onClick={() => removeCart(book.id)}
              >
                X
              </p>
            </div>
          </div>
        );
      })}
      <div className="cart">
        <div className="description">
          <div
            className="img"
            style={{
              background: "transparent",
              width: "4rem",
              height: "3rem",
              margin: "0.5rem",
            }}
          ></div>
          <div style={{ paddingLeft: "1rem" }}>
            <h4></h4>
            <p></p>
          </div>
        </div>
        <div className="price">
          <p>Total</p>
          <p style={{ paddingLeft: "0.5rem", paddingRight: "1rem" }}>
            ${totalPrice}
          </p>
        </div>
      </div>
    </section>
  );
};
