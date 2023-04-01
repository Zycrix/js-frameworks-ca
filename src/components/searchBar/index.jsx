import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input, SearchOverlay, SearchContainer, SearchItem } from "../styles";

function App(props) {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showOverlay, setShowOverlay] = useState(true);
  const products = props.data;
  const navigate = useNavigate();

  function handleSearch(e) {
    setSearchInput(e.target.value);
    console.log(e);
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

  function handleNavigate(id) {
    setSearchInput("");
    navigate(`/product/${id}`);
  }

  return (
    <SearchContainer>
      <Input
        placeholder="Search by title"
        value={searchInput}
        onChange={(e) => handleSearch(e)}
        onFocus={() => setShowOverlay(true)}
        onBlur={(e) => setShowOverlay(false)}
      />
      {showOverlay && searchResults.length > 0 ? (
        <SearchOverlay>
          {searchResults.map((product) => {
            return (
              <SearchItem
                key={product.id}
                onClick={() => handleNavigate(product.id)}
              >
                <img src={product.imageUrl} alt={product.title} />
                <div>
                  <h3>{product.title}</h3>
                  <p>{product.discountedPrice},-</p>
                </div>
              </SearchItem>
            );
          })}
        </SearchOverlay>
      ) : null}
    </SearchContainer>
  );
}

export default App;
