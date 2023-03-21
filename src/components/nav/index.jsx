import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Nav, NavUl, Input, MenuButton, Form, CartContainer } from "../styles";

function App() {
  const path = window.location.pathname;
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(!open);
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
          <Input type="text" placeholder="Search products" />
        </Form>
      </div>
      <CartContainer>
        <Link to="/cart">
          <span className="material-symbols-outlined">shopping_cart</span>
        </Link>
      </CartContainer>
    </Nav>
  );
}

export default App;
