import React from "react";
import styled from "styled-components";
import { Title, Header, Contact } from "../shared/";


const Container = styled.main`
  min-height: 100vh;
  background-color: ${(props) => props.theme.backgroundSecondary};

  .header {
    padding: 1rem 1.5rem;
  }

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

    .title {
      font-size: 22pt;
      font-weight: 400;
      color: ${(props) => props.theme.backgroundPrimary};

      &:before {
        content: "";
        display: inline-block;
        width: 6.5rem;
        margin-right: 0.5em;
        vertical-align: middle;
        border-bottom: 2px solid ${(props) => props.theme.backgroundPrimary};

        opacity: 0.8;
      }

      @media only screen and (max-width: 360px) {
        font-size: 18pt;

        &:before {
          width: 5rem;
        }
      }
    }

    .info {
      font-size: 52pt;
      font-weight: 600;
      font-family: "Blinker", sans-serif;
      color: #2c2c2c;
    }
  }

  @media only screen and (max-width: 560px) {
    .header {
      padding: 0.5rem 1.5rem;
    }
    .leftSection {
      .info {
        font-size: 48pt;
      }
      .title {
        font-size: 20pt;
      }
    }
  }

  @media only screen and (max-width: 420px) {
    .leftSection {
      .info {
        font-size: 34pt;
      }
      .title {
        font-size: 18pt;
      }
    }
  }
`;

const Hero = () => {
  return (
    <Container>
      <Header className="header" />
      <div class="leftSection">
        <div className="title">Ayushi Prakash</div>
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
