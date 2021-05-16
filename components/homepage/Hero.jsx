import React from "react";
import styled from "styled-components";
import { Title, Header } from "../shared/";


const Container = styled.main`
  min-height: 100vh;
  background-color: ${(props) => props.theme.backgroundSecondary};
`;

const LeftSection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  .info {
    font-size: 48pt;
    font-weight: 600;
    font-family: "Blinker", sans-serif;
    color: ${(props) => props.theme.textPrimary};
  }
`;

const Hero = () => {
  return (
    <Container>
      <Header />
      <LeftSection>
        <Title color={"#f4f4f2"}>Ayushi Prakash</Title>
        <div className="info">
          Hello, my <br /> name's Ayushi.
          <br /> I'm a developer & <br /> a designer.
        </div>
      </LeftSection>
    </Container>
  );
};

export default Hero;
