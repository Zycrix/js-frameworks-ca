import React from "react";
import useApi from "../../components/hooks/useApi";
import baseUrl from "../../components/base-url";
import Loader from "../../components/loader";
import Product from "../../components/specific";

function App() {
  const id = window.location.pathname.split("/")[2];
  const { data, loading } = useApi(`${baseUrl}/${id}`);

  return <main>{loading === true ? <Loader /> : <Product data={data} />}</main>;
}

export default App;
