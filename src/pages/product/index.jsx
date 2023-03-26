import React, { useContext } from "react";
import { CartContext } from "../../components/reducer";
import useApi from "../../components/hooks/useApi";
import baseUrl from "../../components/base-url";
import Loader from "../../components/loader";
import { Main, MainHeading } from "../../components/styles";

function App() {
  const { dispatch } = useContext(CartContext);
  const id = window.location.pathname.split("/")[2];
  const { data, loading, error } = useApi(`${baseUrl}/${id}`);
  console.log(data);

  return (
    <Main>
      {loading === true ? (
        <Loader />
      ) : (
        <div>
          <h1>PRODUCT</h1>
        </div>
      )}
    </Main>
  );
}

export default App;
