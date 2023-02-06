import React from "react";
import { Link } from "react-router-dom";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <nav className="flex items-center justify-around flex-wrap bg-teal-500 p-6">
      <ul className="flex justify-evenly">
        <li className="mx-10">
          <Link to="/books">Books</Link>
        </li>
        <li className="mx-10">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-10">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
