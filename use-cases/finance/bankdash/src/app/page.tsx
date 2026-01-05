"use client";
import { reducer } from "@/reducers/reducers";
import Image from "next/image";
import { useReducer } from "react";

export default function Home() {
  const initialState = {
    cart: [],
    totalQuanity: 0,
    totalPrice: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const addItemToCart = (item: string, price: number) => {
    dispatch({ type: "ADD_TO_CART", payload: { item, price } });
  };
  const removeItemFromCart = (item: string, price: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { item, price } });
  };
  return (
    <div className="flex bg-secondary min-h-screen items-center justify-center  font-sans dark:bg-black">
      home
      <button
        onClick={() => addItemToCart("item 1", 10)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add Item
      </button>
      <button
        onClick={() => removeItemFromCart("item 1", 10)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        remove Item
      </button>
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">Cart Summary</h2>
        <p>Total Quantity: {state.totalQuanity}</p>
        <p>Total Price: ${state.totalPrice}</p>
        <h3 className="text-lg font-semibold mt-4">Items in Cart:</h3>
        <ul>
          {state.cart.map((item, index) => (
            <li key={index}>
              {item.item} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
