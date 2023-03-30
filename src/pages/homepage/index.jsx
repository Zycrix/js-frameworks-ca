import React, { useEffect, useContext } from "react";
import useApi from "../../components/hooks/useApi";
import url from "../../components/base-url";
import Loader from "../../components/loader";
import { Main, MainHeading } from "../../components/styles";
import ProductContainer from "../../components/productContainer";
import { CartContext } from "../../components/reducer";

function App() {
  const { data, loading, error, errorMessage } = useApi(url);
  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    if (data) {
      dispatch({ type: "addProducts", payload: data });
    }
  }, [data, dispatch]);
  return (
    <Main>
      <MainHeading>All products</MainHeading>
      {loading === true ? (
        <Loader />
      ) : (
        <ProductContainer
          data={data}
          error={error}
          errorMessage={errorMessage}
        />
      )}
    </Main>
  );
}

export default App;
