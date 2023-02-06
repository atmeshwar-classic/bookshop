import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { cartSelector, removeFromCart } from "./cartSlice";
import { CartProducts } from "./types";

export const CartPage = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const cartItems:CartProducts[] = useSelector(cartSelector);
  console.log("cart", cartItems);
  const total = cartItems.reduce((a, c) => (a += c.price * c.quantity), 0);

  return (
    <div className="container mx-auto mt-5 w-8/12">
      <div className="flex shadow-lg my-10">
        <div className="w-full bg-white p-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{cartItems.length} Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Quantity
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Price
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Total
            </h3>
          </div>
          {cartItems.length === 0 ? (
            <>Empty Cart</>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id}>
                  <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                    <div className="flex w-2/5">
                      <div className="w-15">
                        <img className="h-24" src="" alt="Book Cover" />
                      </div>
                      <div className="flex flex-col justify-between ml-4 flex-grow">
                        <span className="font-bold text-sm">{item.name}</span>
                        <span className="text-red-500 text-xs">
                          {item.description}
                        </span>
                        <button className="font-semibol text-black text-xs" onClick={() => dispatch(removeFromCart(item.id))}>
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-center w-1/5">
                      <input
                        className="mx-2 border text-center w-8"
                        type="text"
                        value={item.quantity}
                        readOnly
                      />
                    </div>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      ${item.price}
                    </span>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      ${item.price * item.quantity}
                    </span>
                  </div>
                </div>
              ))}
            </>
          )}
          <hr />
          <div className=" mt-10 grid justify-items-end font-semibold text-2xl">
            Total: ${total}
          </div>
        </div>
      </div>
    </div>
  );
};
