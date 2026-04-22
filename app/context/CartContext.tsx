"use client";
import { createContext, useContext, useReducer, ReactNode } from "react";
import { Dish } from "../data/dishes";

export type CartItem = Dish & { quantity: number };

type CartState = { items: CartItem[] };

type CartAction =
  | { type: "ADD"; dish: Dish }
  | { type: "REMOVE"; name: string }
  | { type: "INCREMENT"; name: string }
  | { type: "DECREMENT"; name: string }
  | { type: "CLEAR" };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD": {
      const existing = state.items.find((i) => i.name === action.dish.name);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.name === action.dish.name ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { items: [...state.items, { ...action.dish, quantity: 1 }] };
    }
    case "REMOVE":
      return { items: state.items.filter((i) => i.name !== action.name) };
    case "INCREMENT":
      return {
        items: state.items.map((i) =>
          i.name === action.name ? { ...i, quantity: i.quantity + 1 } : i
        ),
      };
    case "DECREMENT":
      return {
        items: state.items.map((i) =>
          i.name === action.name ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i
        ),
      };
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

type CartContextType = {
  items: CartItem[];
  add: (dish: Dish) => void;
  remove: (name: string) => void;
  increment: (name: string) => void;
  decrement: (name: string) => void;
  clear: () => void;
  total: number;
  count: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const parsePrice = (price: string) =>
    parseInt(price.replace(/[₹,]/g, ""), 10) || 0;

  const total = state.items.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );

  const count = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        add: (dish) => dispatch({ type: "ADD", dish }),
        remove: (name) => dispatch({ type: "REMOVE", name }),
        increment: (name) => dispatch({ type: "INCREMENT", name }),
        decrement: (name) => dispatch({ type: "DECREMENT", name }),
        clear: () => dispatch({ type: "CLEAR" }),
        total,
        count,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
