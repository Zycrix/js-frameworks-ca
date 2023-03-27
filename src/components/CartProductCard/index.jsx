import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../reducer";
import { CartImg, CartItem, CartWrapper, PrimaryButton } from "../styles";

function App() {
  const { state, dispatch } = useContext(CartContext);
  const { cart, total, originalPrice } = state;
  const navigate = useNavigate();

  function handleIncrease(e, item) {
    e.stopPropagation();
    dispatch({ type: "addCart", payload: item });
  }
  function handleDecrease(e, item) {
    e.stopPropagation();
    dispatch({ type: "removeCart", payload: item });
  }
  console.log(state);
  return (
    <CartWrapper>
      {cart.map((item) => (
        <CartItem key={item.id} onClick={() => navigate(`/product/${item.id}`)}>
          <CartImg src={item.imageUrl} alt={item.title} />
          <div>
            <h3>{item.title}</h3>
            <p>{item.discountedPrice}</p>
          </div>
          <div className="quantity">
            <button className="add" onClick={(e) => handleIncrease(e, item)}>
              +
            </button>
            <p>{item.quantity}</p>
            <button className="remove" onClick={(e) => handleDecrease(e, item)}>
              -
            </button>
          </div>
        </CartItem>
      ))}
      <div className="cart-price">
        <h3>Price:</h3>
        <p>{originalPrice.toFixed(2)} ,-</p>
      </div>
      <div className="cart-price">
        <h3>Discount:</h3>
        <p>{(originalPrice - total).toFixed(2)} ,-</p>
      </div>
      <hr />
      <div className="cart-price">
        <h3>Total:</h3>
        <p>{total.toFixed(2)} ,-</p>
      </div>
      <PrimaryButton onClick={() => navigate("/checkout")}>
        Checkout
      </PrimaryButton>
    </CartWrapper>
  );
}

export default App;
