import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartCard } from "../../components/cartCard";
import { AppDispatch, RootState } from "../../store/store";
import { removeBookItemsFromcart } from "./cartSlice";
import { CartItem } from "./types";

export const CartPage = (): JSX.Element => {
  const { cartItems } = useSelector((state: RootState) => state.cartItems);
  const [data, setData] = useState<CartItem[]>([]);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    setData(cartItems);
  }, [cartItems]);

  const removeCartItem = (index: number) => {
    dispatch(removeBookItemsFromcart(index));
  };
  const totalPrice = () => {
    return data.reduce((a: number, b: CartItem) => {
      return a + b.price;
    }, 0);
  };
  return (
    <div>
      {data.length > 0 ? (
        <div className="cart_items_main">
          {" "}
          <div className="cart_main">
            {data?.map((cartItem: CartItem, i: number) => {
              return (
                <div key={cartItem.id} className="cart_sub">
                  <CartCard
                    id={cartItem.id}
                    name={cartItem.name}
                    description={cartItem.description}
                    price={cartItem.price}
                    onClickCross={removeCartItem}
                    index={i}
                  />
                </div>
              );
            })}
            <CartCard
              id={"129"}
              name={" "}
              description={" "}
              price={totalPrice()}
            />
          </div>
        </div>
      ) : (
        <h3>No Books In Cart, Please Add Books...</h3>
      )}
    </div>
  );
};
