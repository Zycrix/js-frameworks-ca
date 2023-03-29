import React from "react";
import { useNavigate } from "react-router-dom";
import { ProductCard, ProductContainer } from "../styles";
import Product from "../product";

function App(props) {
  const navigate = useNavigate();

  return (
    <ProductContainer>
      {props.data.map((item) => (
        <ProductCard
          key={item.id}
          onClick={() => navigate(`/product/${item.id}`)}
        >
          <Product data={item} />
        </ProductCard>
      ))}
    </ProductContainer>
  );
}

export default App;
