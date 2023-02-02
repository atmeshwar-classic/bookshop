import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from './types'
import type { RootState } from '../../store/store';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Book } from "../books/types";
const initialState: CartState = {
    cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems")!)
        : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Book>) {
            const existingIndex:number = state.cartItems.findIndex(
                (item: CartItem) => item.id === action.payload.id
            );

            if (existingIndex >= 0) {
                state.cartItems[existingIndex] = {
                    ...state.cartItems[existingIndex],
                    cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
                };
                toast.info("Increased Book quantity", {
                    position: "top-right",
                });
            } else {
                let tempProductItem : CartItem = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProductItem);
                toast.success("Book added to cart", {
                    position: "top-right",
                });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        removeFromCart(state, action: PayloadAction<Book>) {
            state.cartItems.map((cartItem) => {
                if (cartItem.id === action.payload.id) {
                    const nextCartItems = state.cartItems.filter(
                        (item) => item.id !== cartItem.id
                    );

                    state.cartItems = nextCartItems;

                    toast.error("Book removed from cart", {
                        position: "top-right",
                    });
                }
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
                return state;
            });
        },

        getTotals(state, action: PayloadAction) {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price, cartQuantity } = cartItem;
                    const itemTotal:number = price * cartQuantity;
                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;
                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
    },
});

export const { addToCart, removeFromCart, getTotals } = cartSlice.actions;
export const cartSliceReducer = cartSlice.reducer;
export const cartSelector = (state: RootState) => state.cartItems;