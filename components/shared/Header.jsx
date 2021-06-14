import React from "react";
import styled from "styled-components";
import { Button } from "../shared/";

const Container = styled.main`
  background-color: ${(props) => props.theme.backgroundSecondary};
  max-width: calc(1200px + 4rem);
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #2c2c2c;
  font-family: "Blinker", sans-serif;
  cursor: pointer;

  .logo {
    font-size: 36pt;
    font-weight: 400;
  }

  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 14pt;
    font-weight: 400;

    a {
      text-decoration: none;
      color: inherit;
    }

    a:not(:last-child) {
      margin-right: 2rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .wrapper {
      display: none;
    }
  }
`;

const Header = () => {
  return (
    <Container>
      <div className="logo">AP</div>

      <div className="wrapper">
        <a href="#about">ABOUT</a>
        <a href="#experience">EXPERIENCE</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>
        {/* <Button>
          <a>Resume</a>
        </Button> */}
      </div>
    </Container>
  );
};

export default Header;
