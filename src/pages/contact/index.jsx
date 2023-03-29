import React from "react";
import {
  Main,
  MainHeading,
  ContactContainer,
  WidthWrapper,
} from "../../components/styles";
import ContactForm from "../../components/ContactForm";

function App() {
  return (
    <Main>
      <WidthWrapper>
        <ContactContainer>
          <MainHeading>Contact us</MainHeading>
          <ContactForm />
        </ContactContainer>
      </WidthWrapper>
    </Main>
  );
}

export default App;
