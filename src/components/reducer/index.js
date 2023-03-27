import React, { useReducer, createContext } from "react";

const initialState = {
  cart: [],
  total: 0,
  originalPrice: 0,
};

function reducer(state, action) {
  let productIndex;
  let newTotal;
  let newOriginalPrice;
  let cart;

  switch (action.type) {
    case "addCart":
      cart = [...state.cart];
      productIndex = cart.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex === -1) {
        cart.push({ ...action.payload, quantity: 1 });
      } else {
        cart = [
          ...cart.slice(0, productIndex),
          { ...cart[productIndex], quantity: cart[productIndex].quantity + 1 },
          ...cart.slice(productIndex + 1),
        ];
      }
      newTotal = cart.reduce((currentTotal, product) => {
        currentTotal += product.discountedPrice * product.quantity;
        return currentTotal;
      }, 0);
      newOriginalPrice = cart.reduce((currentTotal, product) => {
        currentTotal += product.price * product.quantity;
        return currentTotal;
      }, 0);
      return {
        ...state,
        cart: cart,
        total: newTotal,
        originalPrice: newOriginalPrice,
      };
    case "removeCart":
      cart = [...state.cart];
      productIndex = cart.findIndex(
        (product) => product.id === action.payload.id
      );

      if (productIndex !== -1) {
        if (cart[productIndex].quantity > 1) {
          cart = [
            ...cart.slice(0, productIndex),
            {
              ...cart[productIndex],
              quantity: cart[productIndex].quantity - 1,
            },
            ...cart.slice(productIndex + 1),
          ];
        } else {
          cart = [
            ...cart.slice(0, productIndex),
            ...cart.slice(productIndex + 1),
          ];
        }
      }

      newTotal = cart.reduce((currentTotal, product) => {
        currentTotal += product.discountedPrice * product.quantity;
        return currentTotal;
      }, 0);
      newOriginalPrice = cart.reduce((currentTotal, product) => {
        currentTotal += product.price * product.quantity;
        return currentTotal;
      }, 0);

      return {
        ...state,
        cart: cart,
        total: newTotal,
        originalPrice: newOriginalPrice,
      };
    case "clearCart":
      console.log("clearCart");
      return {
        ...state,
        cart: [],
        total: 0,
        originalPrice: 0,
      };
    default:
      throw new Error();
  }
}

const CartContext = createContext();
const local = JSON.parse(localStorage.getItem("cart"));
const storedTotal = Number(JSON.parse(localStorage.getItem("total")));
const storedOriginalPrice = Number(
  JSON.parse(localStorage.getItem("originalPrice"))
);

if (local) {
  initialState.cart.push(...local);
  initialState.total = storedTotal;
  initialState.originalPrice = storedOriginalPrice;
}
function CartProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
