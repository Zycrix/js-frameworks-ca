import React from "react";
import { Main, MainHeading } from "../../components/styles";
import CartProductCard from "../../components/CartProductCard";

function App() {
  return (
    <Main>
      <MainHeading>Your Cart</MainHeading>
      <hr />
      <CartProductCard />
    </Main>
  );
}

export default App;
