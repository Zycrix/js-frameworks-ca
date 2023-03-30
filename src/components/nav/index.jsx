import React, { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { CartContext } from "../reducer";
import SearchBar from "../searchBar";
import {
  Nav,
  NavUl,
  MenuButton,
  Form,
  CartContainer,
  CartOverlay,
} from "../styles";

function App(props) {
  const path = window.location.pathname;
  const [open, setOpen] = useState(false);
  const { state } = useContext(CartContext);
  let cartItemsLength = 0;
  const products = state.products;

  function toggleMenu() {
    setOpen(!open);
  }

  if (state.cart.length > 0) {
    cartItemsLength = state.cart.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
  }

  return (
    <Nav>
      <MenuButton onClick={toggleMenu}>
        <span className="material-symbols-outlined">menu</span>
      </MenuButton>
      <NavUl open={open}>
        <li>
          <NavLink
            exact="true"
            onClick={toggleMenu}
            className={path === "/" ? true : false}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={toggleMenu}
            className={path === "/contact" ? true : false}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </NavUl>
      <div>
        <Form>
          <SearchBar data={products} />
        </Form>
      </div>
      <CartContainer>
        <Link to="/cart">
          <span className="material-symbols-outlined">shopping_cart</span>
          {cartItemsLength > 0 ? (
            <CartOverlay>{cartItemsLength}</CartOverlay>
          ) : null}
        </Link>
      </CartContainer>
    </Nav>
  );
}

export default App;
