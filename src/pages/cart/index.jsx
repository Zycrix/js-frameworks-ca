import React from "react";
import { Main, MainHeading, WidthWrapper } from "../../components/styles";
import CartProductCard from "../../components/CartProductCard";

function App() {
  return (
    <Main>
      <WidthWrapper>
        <MainHeading>Your Cart</MainHeading>
        <hr />
        <CartProductCard />
      </WidthWrapper>
    </Main>
  );
}

export default App;
