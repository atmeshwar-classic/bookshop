import { NavLink } from "react-router-dom";
import "./navbar.styles.css"
const NavBar = (): JSX.Element => {
    return (
        <nav className="nav-bar">
            <NavLink to="/">
                <h2>Books</h2>
            </NavLink>
            <NavLink to="/cart">
                <h2>Cart</h2>
            </NavLink>
        </nav>
    );
};

export default NavBar;