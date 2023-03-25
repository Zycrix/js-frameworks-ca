import React from "react";
import LoaderImage from "../../media/loader.svg";
import { Loader, LoaderContainer } from "../styles";

function App() {
  return (
    <LoaderContainer>
      <Loader src={LoaderImage} />
    </LoaderContainer>
  );
}

export default App;
