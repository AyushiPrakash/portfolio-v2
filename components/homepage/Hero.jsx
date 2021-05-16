import React from "react";
import styled from "styled-components";
import { Title } from "../shared/";

const Container = styled.main`
  min-height: 100vh;
  background-color: ${(props) => props.theme.backgroundSecondary};
`;

const LeftSection = styled.section``;

const Hero = () => {
  return (
    <Container>
      <LeftSection>
        <Title>
          <span>Ayushi Prakash</span>
        </Title>
        <div>Hello, my name's Ayushi. I'm a developer & a designer.</div>
      </LeftSection>
    </Container>
  );
};

export default Hero;
