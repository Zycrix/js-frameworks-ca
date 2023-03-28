import React from "react";
import { Main, MainHeading, ContactContainer } from "../../components/styles";
import ContactForm from "../../components/ContactForm";

function App() {
  return (
    <Main>
      <ContactContainer>
        <MainHeading>Contact us</MainHeading>
        <ContactForm />
      </ContactContainer>
    </Main>
  );
}

export default App;
