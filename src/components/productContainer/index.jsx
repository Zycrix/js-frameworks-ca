import React from "react";
import {
  ProductCard,
  InfoContainer,
  DiscountOverlay,
  FadedText,
} from "../styles";

function App(props) {
  console.log(props.data);
  return (
    <div>
      {props.data.map((item) => (
        <ProductCard key={item.id} onClick={() => console.log(item)}>
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
          </InfoContainer>
        </ProductCard>
      ))}
    </div>
  );
}

export default App;
