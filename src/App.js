import React, { useContext, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/homepage";
import Product from "./pages/product";
import Cart from "./pages/cart";
import Checkout from "./pages/checkoutSuccess";
import Contact from "./pages/contact";
import { CartContext } from "./components/reducer";

function App() {
  const { state } = useContext(CartContext);

  //Store cart to local storage to make the data persist trough refresh
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    localStorage.setItem("total", JSON.stringify(state.total));
    localStorage.setItem("originalPrice", JSON.stringify(state.originalPrice));
  }, [state.cart, state.total, state.originalPrice]);

  //Scroll to top on route change
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
