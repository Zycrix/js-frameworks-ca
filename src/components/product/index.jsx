import React, { useContext } from "react";
import {
  DiscountOverlay,
  InfoContainer,
  FadedText,
  PrimaryButton,
  ProductImg,
  ImgContainer,
} from "../styles";
import { CartContext } from "../reducer";

function App(props) {
  const item = props.data;
  const { dispatch } = useContext(CartContext);

  const handleAddToCart = (e, item) => {
    e.stopPropagation();
    dispatch({ type: "addCart", payload: item });
  };

  return (
    <>
      <ImgContainer>
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
        <ProductImg src={item.imageUrl} alt={item.title} />
      </ImgContainer>
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
    </>
  );
}

export default App;
