import React, { useContext } from "react";
import { CartContext } from "../../components/reducer";
import useApi from "../../components/hooks/useApi";
import baseUrl from "../../components/base-url";
import Loader from "../../components/loader";
import Product from "../../components/specific";

function App() {
  const { dispatch } = useContext(CartContext);
  const id = window.location.pathname.split("/")[2];
  const { data, loading, error } = useApi(`${baseUrl}/${id}`);

  return <main>{loading === true ? <Loader /> : <Product data={data} />}</main>;
}

export default App;
