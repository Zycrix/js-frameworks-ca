import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<div>CONTACT</div>} />
        <Route path="/cart" element={<div>CART</div>} />
      </Route>
    </Routes>
  );
}

export default App;
