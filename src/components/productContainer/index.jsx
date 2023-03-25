import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import {
  ProductCard,
  InfoContainer,
  DiscountOverlay,
  FadedText,
  PrimaryButton,
} from "../styles";
import { reducer, initialState } from "../reducer";

function App(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  const handleAddToCart = (e, item) => {
    e.stopPropagation();
    dispatch({ type: "addCart", payload: item });
  };

  return (
    <div>
      {props.data.map((item) => (
        <ProductCard
          key={item.id}
          onClick={() => navigate(`/product/${item.id}`)}
        >
          {item.discountedPrice < item.price ? (
            <DiscountOverlay>
              <span>
                {(
                  ((item.price - item.discountedPrice) / item.price) *
                  100
                ).toFixed(0)}
                %
              </span>
            </DiscountOverlay>
          ) : null}
          <img src={item.imageUrl} alt={item.title} />
          <InfoContainer>
            <h2>{item.title}</h2>
            <div className="price-rating">
              {item.discountedPrice < item.price ? (
                <div>
                  <FadedText>Before {item.price},-</FadedText>
                  <p className="onSale-text">Now {item.discountedPrice},-</p>
                </div>
              ) : (
                <p>{item.discountedPrice},-</p>
              )}
              <p>
                {item.rating}
                <span className="material-symbols-outlined">star</span>
              </p>
            </div>
            <PrimaryButton onClick={(e) => handleAddToCart(e, item)}>
              Add to cart!
            </PrimaryButton>
          </InfoContainer>
        </ProductCard>
      ))}
    </div>
  );
}

export default App;
