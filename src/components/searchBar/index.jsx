import React, { useState, useEffect } from "react";
import { Input, SearchOverlay, SearchContainer } from "../styles";

function App(props) {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const products = props.data;

  function handleSearch(e) {
    setSearchInput(e.target.value);
  }

  useEffect(() => {
    let filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(searchInput.toLowerCase());
    });
    if (filteredProducts.length === 25) {
      filteredProducts = [];
    }
    setSearchResults(filteredProducts);
    console.log(searchResults);
  }, [searchInput]);
  return (
    <SearchContainer>
      <Input
        placeholder="Search by title"
        value={searchInput}
        onChange={(e) => handleSearch(e)}
      />
      {searchResults.length > 0 ? (
        <SearchOverlay>
          {searchResults.map((product) => {
            return <p>{product.title}</p>;
          })}
        </SearchOverlay>
      ) : null}
    </SearchContainer>
  );
}

export default App;
