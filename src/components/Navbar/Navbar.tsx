import React, { useState } from "react";
import { Drawer } from "antd";
import "./style.css";
import { CartPage } from "../../domain/cart/CartPage";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="navbar-container">
        <div className="left-nav-cont">CI</div>
        <div className="right-nav-cont">
          <span>Book</span>
          <span onClick={showDrawer}>Cart</span>
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
