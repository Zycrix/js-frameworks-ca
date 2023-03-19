import styled from "styled-components";

const primaryColor = "hotpink";
const secondaryColor = "";

export const Header = styled.header`
  background-color: ${primaryColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7vh;
  position: relative;
`;

export const NavUl = styled.ul`
  background-color: lightblue;
  padding: 10px 0;
  margin: 0;
  width: 100%;
  display: ${(props) => (props.open === true ? "block" : "none")};
  position: absolute;
  top: 7vh;
  left: 0;
  li {
    margin: 10px 10px;
    a {
      color: black;
      text-decoration: none;
    }
    .active {
      color: red;
    }
  }
`;

export const MenuButton = styled.button`
  display: block;
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
`;

export const Input = styled.input`
  padding: 0.1rem 0.3rem;
  margin: 0;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
`;
