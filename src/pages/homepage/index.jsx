import React from "react";
import useApi from "../../components/hooks/useApi";
import url from "../../components/base-url";
import Loader from "../../components/loader";
import { Main, MainHeading } from "../../components/styles";
import ProductContainer from "../../components/productContainer";

function App() {
  const { data, loading, error, errorMessage } = useApi(url);

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
