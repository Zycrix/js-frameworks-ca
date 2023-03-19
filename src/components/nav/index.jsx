import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavUl, Input, MenuButton, Form } from "../styles";

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
          <NavLink exact="true" className={path === "/" ? true : false} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={path === "/contact" ? true : false} to="/contact">
            Contact
          </NavLink>
        </li>
      </NavUl>
      <div>
        <Form>
          <Input type="text" placeholder="Search" />
        </Form>
      </div>
      <div>
        <span className="material-symbols-outlined">shopping_cart</span>
      </div>
    </Nav>
  );
}

export default App;
