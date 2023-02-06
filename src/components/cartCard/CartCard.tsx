import React from "react";
import "./style.css";
import { CartItem } from "../../domain/cart/types";
import { useDispatch } from "react-redux";
import { removeItem } from "../../domain/cart/cartSlice";

interface CartcardProps {
  cartitem: CartItem;
}

const CartCard = ({ cartitem }: CartcardProps) => {
  const dispatch = useDispatch();

  return (
    <div className="cartcard-container">
      <div className="info-cartcard">
        <p>Name - {cartitem.name}</p>
        <p>Price - {cartitem.price}</p>
        <p>Description - {cartitem.description}</p>
      </div>
      <div
        className="remove-cartcard"
        onClick={() => {
          // console.log("checking");
          dispatch(removeItem(cartitem.id));
        }}
      >
        <span>x</span>
      </div>
    </div>
  );
};

export default CartCard;
