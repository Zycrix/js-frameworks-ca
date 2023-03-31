import styled, { keyframes } from "styled-components";

const primaryColor = "#5561AD";
const secondaryColor = primaryColor;
const activeColor = "white";
const textColor = "white";
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
  span {
    color: ${textColor};
    font-size: 1.5rem;
    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }
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
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 70%;
  }
`;

export const NavUl = styled.ul`
  background-color: ${secondaryColor};
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
      color: ${activeColor};
      border-bottom: 2px solid ${activeColor};
    }
    a {
      color: ${textColor};
    }
  }
  @media (min-width: 1200px) {
    display: block;
    position: unset;
    padding: 0;
    width: auto;
    li {
      display: inline-block;
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
  @media (min-width: 1200px) {
    display: none;
  }
`;

export const Input = styled.input`
  padding: 0.2rem 0.3rem;
  margin: 0;
  border-radius: 5px;
  border: 1px solid black;
  width: 100%;
  @media (min-width: 768px) {
    padding: 0.3rem 0.5rem;
    font-size: 1.2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40vw;
`;

export const CartContainer = styled.div`
  padding-right: 10px;
  position: relative;
  @media (min-width: 1200px) {
    display: flex;
    justify-content: flex-end;
  }
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
  @media (min-width: 768px) {
    left: 10px;
  }
  @media (min-width: 1200px) {
    right: 15px;
    left: unset;
  }
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
  @media (min-width: 1200px) {
    width: 70%;
  }
`;

export const MainHeading = styled.h1`
  text-align: center;
`;

export const ProductContainer = styled.div`
  @media (min-width: 520px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
export const ProductCard = styled.div`
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  margin: 2rem 0;
  cursor: pointer;
  position: relative;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    width: 100%;
    max-height: 40vh;
    object-fit: cover;
    object-position: 50% 50%;
    /* I know this is not an optimal solution but i think it was the best way of doing this since we can't edit the photos */
    aspect-ratio: 1/1;
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
  color: white;
  width: 100%;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1.3rem;
  :disabled {
    opacity: 0.2;
    background-color: red !important;
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  /* max-height: 40vh; */
  object-fit: cover;
  @media (min-width: 550px) {
    max-height: 60vh;
  }
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

export const SpecificContainer = styled.div`
  margin: 0 auto;
  overflow: hidden;
  @media (min-width: 500px) {
    width: 80%;
  }
  @media (min-width: 768px) {
    width: 60%;
    img {
      height: 60vh !important;
    }
  }
  @media (min-width: 1000px) {
    width: 50%;
  }
  @media (min-width: 1200px) {
    width: 40%;
  }
  @media (min-width: 1400px) {
    width: 30%;
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

export const CartImg = styled.img`
  max-width: 100%;
  max-height: 10vh;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

export const CartItem = styled.div`
  display: grid;
  margin: 1rem 0;
  grid-template-columns: 1.5fr 4fr 1fr;
  border-bottom: 1px solid lightgrey;
  padding: 0.5rem 0;
  div {
    padding: 0 1rem;
    flex-grow: 2;
  }
  h3,
  p {
    margin: 0;
  }
  .quantity {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    p {
      width: calc(100% - 1px);
      text-align: center;
    }
  }
  button {
    background-color: ${primaryColor};
    color: white;
    border: none;
    width: 100%;
  }
  .add {
    border-radius: 5px 5px 0 0;
  }
  .remove {
    border-radius: 0 0 5px 5px;
  }
`;

export const CartWrapper = styled.div`
  .cart-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  button {
    width: 100%;
    font-size: 1.2rem;
  }
`;

export const ContactContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    max-width: 100%;
  }
  p {
    color: red;
    margin: 0;
  }
  .success {
    color: green;
    text-align: center;
  }
  input,
  textarea {
    border-radius: 5px;
    border: 1px solid lightgrey;
    padding: 0.5rem;
  }
  label {
    padding: 0.5rem 0;
  }
  button {
    margin: 1rem 0;
  }
`;
export const WidthWrapper = styled.div`
  @media (min-width: 768px) {
    width: 70%;
    margin: 0 auto;
  }
  @media (min-width: 1200px) {
    width: 50%;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
`;
export const SearchOverlay = styled.div`
  position: absolute;
  background-color: white;
  width: 180%;
  left: -40%;
  padding: 0.2rem 0.3rem;
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  max-height: 70vh;
  overflow-y: scroll;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.2);
`;
export const SearchItem = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  img {
    max-width: 100%;
    max-height: 10vh;
    border-radius: 5px;
    margin: auto 0.2rem;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
  div {
    margin: 0 0.5rem;
  }
`;
