import React, { useState } from "react";
import { Drawer } from "antd";
import "./style.css";
import { CartPage } from "../../domain/cart/CartPage";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const cartdata = useSelector((state: RootState) => state.cart.cart);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="navbar-container">
        <div className="right-nav-cont">
          <span onClick={showDrawer}>Cart</span>
          <p className="cart-items-count">{cartdata.length}</p>
        </div>
      </div>
      <Drawer
        placement={"right"}
        closable={false}
        onClose={onClose}
        open={open}
        key={"right"}
      >
        <CartPage />
      </Drawer>
    </>
  );
};

export default Navbar;
