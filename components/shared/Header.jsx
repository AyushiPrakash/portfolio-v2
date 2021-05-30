import React from "react";
import styled from "styled-components";
import { Button } from "../shared/";

const Container = styled.main`
  background-color: ${(props) => props.theme.backgroundSecondary};
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem 0;
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

    span:not(:last-child) {
      margin-right: 2rem;
    }
  }
`;

const Header = () => {
  return (
    <Container>
      <div className="logo">AP</div>

      <div className="wrapper">
        <span>ABOUT</span>
        <span>EXPERIENCE</span>
        <span>PROJECTS</span>
        <span>CONTACT</span>
        {/* <Button>
          <span>Resume</span>
        </Button> */}
      </div>
    </Container>
  );
};

export default Header;
