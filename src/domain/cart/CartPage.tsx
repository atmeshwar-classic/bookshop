import { useEffect, useState } from "react";
import { CartItem } from "./types";
import { Book } from "../books/types";

interface BookPageProps {
  books: Book[];
}
export const CartPage = ({ books }: BookPageProps): JSX.Element => {
  const [cartData, setCartData] = useState<CartItem[]>(books);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    let TotalPrice = 0;
    books.forEach((book) => {
      TotalPrice += book.price;
    });
    setTotalPrice(TotalPrice);
  }, [books]);

  const subtractCart = (id: string) => {
    // console.log("clicked");
    let updatedTotalPrice = totalPrice;
    const filteredData = cartData.filter((cartData) => {
      if (cartData.id === id) {
        updatedTotalPrice -= cartData.price;
        return false;
      }
      return true;
    });
    setCartData(filteredData);
    setTotalPrice(updatedTotalPrice);
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
                onClick={() => subtractCart(book.id)}
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
