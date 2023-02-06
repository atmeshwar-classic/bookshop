import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navLink">
        Home
      </Link>
      <Link to="/cart" className="navLink">
        Cart
      </Link>
    </div>
  );
};

export default Navbar;
