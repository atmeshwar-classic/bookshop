import { BooksPage } from "../domain/books/BooksPage";
import { CartPage } from "../domain/cart/CartPage";

export const routes = [
    {
        path: "/",
        Component: BooksPage
    },
    {
        path: "/cart",
        Component: CartPage
    }   
]