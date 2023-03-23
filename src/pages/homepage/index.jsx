import React from "react";
import useApi from "../../components/hooks/useApi";
import url from "../../components/base-url";

function App() {
  const { data, loading, error } = useApi(url);
  console.log(data);
  console.log(loading);
  console.log(error);
  return (
    <main>
      <div>HOME</div>
    </main>
  );
}

export default App;
