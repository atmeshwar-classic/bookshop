import { Route, Routes as Switch } from "react-router-dom";
import BooksPage from "../domain/books/BooksPage";
import CartPage from "../domain/cart/CartPage";
const Routes = () => {
    return (
        <Switch>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/" element={<BooksPage />} />
        </Switch>
    )
}
export default Routes