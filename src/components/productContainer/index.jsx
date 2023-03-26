import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "../styles";
import Product from "../product";

function App(props) {
  const navigate = useNavigate();

  return (
    <div>
      {props.data.map((item) => (
        <ProductCard
          key={item.id}
          onClick={() => navigate(`/product/${item.id}`)}
        >
          <Product data={item} />
        </ProductCard>
      ))}
    </div>
  );
}

export default App;
