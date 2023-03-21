import styled from "styled-components";

const primaryColor = "hotpink";
const secondaryColor = "lightblue";
const activeColor = "red";
const textColor = "black";

export const Header = styled.header`
  background-color: ${primaryColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7vh;
  position: relative;
  padding: 0;
`;

export const NavUl = styled.ul`
  background-color: ${secondaryColor}};
  padding: 10px 0;
  margin: 0;
  width: 100%;
  display: ${(props) => (props.open === true ? "block" : "none")};
  position: absolute;
  list-style: none;
  top: 7vh;
  left: 0;
  li {
    margin: 10px 10px;
    .active {
      color: ${activeColor}};
    }
  }
`;

export const MenuButton = styled.button`
  display: block;
  padding: 0;
  padding-left: 10px;
  margin: 0;
  border: none;
  background-color: transparent;
`;

export const Input = styled.input`
  padding: 0.2rem 0.3rem;
  margin: 0;
  border-radius: 5px;
  border: 1px solid black;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const CartContainer = styled.div`
  padding-right: 10px;
`;

export const Footer = styled.footer`
  background-color: ${primaryColor};
  color: ${textColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
