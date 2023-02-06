// import React, { useState } from "react";
// import { Drawer } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { changeToCartPage, changeToBookPage } from "../../domain/app/appSlice";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  // const [open, setOpen] = useState(false);
  const cartdata = useSelector((state: RootState) => state.cart.cart);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  // const showDrawer = () => {
  //   setOpen(true);
  // };

  // const onClose = () => {
  //   setOpen(false);
  // };

  const triggerBookAction = () => {
    dispatch(changeToBookPage());
    navigate("/");
  };

  const triggerCartAction = () => {
    dispatch(changeToCartPage());
    navigate("/cart");
  };

  return (
    <>
      <div className="navbar-container">
        <div className="left-nav-cont">
          <span onClick={triggerBookAction}>Books</span>
        </div>
        <div className="right-nav-cont">
          <span onClick={triggerCartAction}>Cart</span>
          <p className="cart-items-count">{cartdata.length}</p>
        </div>
      </div>
      {/* <Drawer
        placement={"right"}
        closable={false}
        onClose={onClose}
        open={open}
        key={"right"}
      >
        <CartPage />
      </Drawer> */}
    </>
  );
};

export default Navbar;
