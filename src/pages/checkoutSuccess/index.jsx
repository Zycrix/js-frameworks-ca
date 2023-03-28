import React, { useContext, useEffect } from "react";
import { CartContext } from "../../components/reducer";
import { Main, MainHeading, PrimaryButton } from "../../components/styles";
import { useNavigate } from "react-router-dom";

function App() {
  const { dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "clearCart" });
  }, [dispatch]);

  function backToHome() {
    navigate("/");
  }

  return (
    <Main>
      <MainHeading>Thanks for your order!</MainHeading>
      <div>
        <p>
          Your order has been placed and will be processed as soon as possible!
        </p>
        <p>Did you miss something?</p>
        <PrimaryButton onClick={backToHome}>
          &lt;- Back to homepage
        </PrimaryButton>
      </div>
    </Main>
  );
}

export default App;
