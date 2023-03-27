import React, { useContext, useEffect } from "react";
import { CartContext } from "../../components/reducer";

function App() {
  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    dispatch({ type: "clearCart" });
  }, []);

  return (
    <div>
      <h1>Checkout Success</h1>
    </div>
  );
}

export default App;
