import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      
    >
      <div>
        <Link to="/" className="navLink">Home</Link>
        <Link to="/cart" className="navLink">Cart</Link>
      </div>
    </div>
  );
};

export default Navbar;
