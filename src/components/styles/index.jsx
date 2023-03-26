import styled, { keyframes } from "styled-components";

const primaryColor = "#5561AD";
const secondaryColor = "lightblue";
const activeColor = "red";
const textColor = "black";
const discountColor = "#FA635C";
const fadedTextColor = "#878787";

export const Header = styled.header`
  background-color: ${primaryColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  z-index: 101;
  width: 100%;
  top: 0;
`;

export const HeaderSpacer = styled.div`
  height: 7vh;
  width: 100%;
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
  position: relative;
`;

export const CartOverlay = styled.div`
  position: absolute;
  background-color: ${discountColor};
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  top: 0;
  left: 0;
  transform: translate(50%, -50%);
`;

export const Footer = styled.footer`
  background-color: ${primaryColor};
  color: ${textColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const loaderAnimation = keyframes`
  0%{
    transform: rotate(0deg);
  }
  50%{
    transform: rotate(180deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;

export const Loader = styled.img`
  max-width: 60px;
  animation-name: ${loaderAnimation};
  animation-duration: 3s;
  animation-iteration-count: infinite;
`;

export const LoaderContainer = styled.div`
  width: 50%;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
`;

export const Main = styled.main`
  width: 90%;
  margin: 0 auto;
`;

export const MainHeading = styled.h1`
  text-align: center;
`;

export const ProductCard = styled.div`
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  margin: 2rem 0;
  cursor: pointer;
  position: relative;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
    max-height: 40vh;
    object-fit: cover;
    object-position: center;
  }
`;

export const InfoContainer = styled.div`
  padding: 0.5rem;
  margin: 1rem;
  h2 {
    margin: 0;
    text-align: center;
  }
  p {
    font-size: 1.1rem;
  }
  .price-rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      display: flex;
      align-items: center;
      span {
        color: #f5d239;
      }
    }
    .onSale-text {
      color: red;
    }
  }
  button {
    width: 100%;
    color: white;
  }
`;

export const FadedText = styled.p`
  color: ${fadedTextColor};
  font-size: 0.8rem !important;
  text-decoration: line-through;
`;

export const DiscountOverlay = styled.div`
  position: absolute;
  z-index: 100;
  width: 30px;
  height: 30px;
  span {
    background-color: ${discountColor};
    transform: rotate(-45deg);
    width: 225px;
    padding: 15px 0;
    text-align: center;
    position: absolute;
    top: 20px;
    left: -70px;
    display: block;
  }
`;

export const PrimaryButton = styled.button`
  background-color: ${primaryColor};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
`;

export const ProductImg = styled.img`
  width: 100%;
  max-height: 40vh;
  object-fit: cover;
`;

export const ImgContainer = styled.div`
  position: relative;
`;

export const ProductInfo = styled.div`
  h1 {
    text-align: center;
  }
`;

export const Description = styled.div`
  margin: 1rem;
  padding: 0 0.5rem;
`;

export const ReviewContainer = styled.div`
  margin: 2rem 1rem;
  padding: 0 0.5rem;
  h2,
  section {
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2),
      10px 30px 20px rgba(0, 0, 0, 0.2);
    padding: 0.5rem;
    border-radius: 5px;
  }
  section {
    background-color: white;
    margin: 1rem 0;
  }
`;

export const ReviewContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    max-width: 60%;
    margin: 0;
  }
  div p {
    display: flex;
    font-size: 1.5rem;
    align-items: center;
  }
  div p span {
    color: #f5d239;
  }
`;
