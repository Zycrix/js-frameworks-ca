import React from "react";
import {
  Description,
  ReviewContainer,
  ReviewContent,
  SpecificContainer,
} from "../styles";
import Product from "../product";

function App(params) {
  const item = params.data;

  return (
    <SpecificContainer>
      <Product data={item} />
      <Description>
        <p>{item.description}</p>
      </Description>
      <ReviewContainer>
        {item.reviews?.[0]?.id !== undefined ? <h2>Reviews:</h2> : null}
        {item.reviews &&
          item.reviews.map((review) => (
            <section key={review.id}>
              <h3>{review.username}</h3>
              <ReviewContent>
                <p>{review.description}</p>
                <div>
                  <p>
                    {review.rating}
                    <span className="material-symbols-outlined">star</span>
                  </p>
                </div>
              </ReviewContent>
            </section>
          ))}
      </ReviewContainer>
    </SpecificContainer>
  );
}

export default App;
