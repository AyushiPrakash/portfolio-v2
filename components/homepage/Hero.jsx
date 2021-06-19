import React from "react";
import styled from "styled-components";
import { Title, Header, Contact } from "../shared/";


const Container = styled.main`
  min-height: 100vh;
  background-color: ${(props) => props.theme.backgroundSecondary};

  .leftSection {
    width: 100%;
    max-width: calc(1200px + 4rem);
    margin: 0 auto;
    padding: 0 1.5rem;
    height: 50%;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    .info {
      font-size: 52pt;
      font-weight: 600;
      font-family: "Blinker", sans-serif;
      color: #2c2c2c;
    }
  }

  @media only screen and (max-width: 560px) {
    .leftSection {
      .info {
        font-size: 48pt;
      }
    }
  }

  @media only screen and (max-width: 420px) {
    .leftSection {
      .info {
        font-size: 36pt;
      }
    }
  }
`;

const Hero = () => {
  return (
    <Container>
      <Header />
      <div class="leftSection">
        <Title color={"#f4f4f2"}>Ayushi Prakash</Title>
        <div className="info">
          Hello, my <br /> name's Ayushi.
          <br /> I'm a developer & <br /> a designer.
        </div>
      </div>
      <Contact />
    </Container>
  );
};

export default Hero;
