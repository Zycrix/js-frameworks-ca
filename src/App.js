import React, { useContext, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/homepage";
import Product from "./pages/product";
import Cart from "./pages/cart";
import { CartContext } from "./components/reducer";

function App() {
  const { state } = useContext(CartContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    localStorage.setItem("total", JSON.stringify(state.total));
    localStorage.setItem("originalPrice", JSON.stringify(state.originalPrice));
  }, [state.cart]);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/contact" element={<div>CONTACT</div>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<div>checkout</div>} />
      </Route>
    </Routes>
  );
}

export default App;
