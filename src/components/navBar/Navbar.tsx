import React from 'react'
import classes from "./../../styles/navbar.module.css"
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className={classes.navbar}>
        <nav>
            <ul>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
