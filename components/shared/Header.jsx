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

  nav ul {
    list-style: none;
    text-align: center;
  }
  nav ul li {
    display: inline-block;
  }
  nav ul li a {
    display: block;
    padding-bottom: 8px;
    text-decoration: none;
    color: ${(props) => props.theme.textPrimary};
    font-size: 14pt;
    font-weight: 400;
    margin-right: 2rem;
  }

  nav ul li a,
  nav ul li a:after,
  nav ul li a:before {
    transition: all 0.3s;
  }
  nav ul li a:hover {
    color: ${(props) => props.theme.textPrimary};
  }

  /* stroke */
  nav.wrapper ul li a,
  nav.fill ul li a {
    position: relative;
  }
  nav.wrapper ul li a:after,
  nav.fill ul li a:after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 0%;
    content: ".";
    color: transparent;
    background: ${(props) => props.theme.textPrimary};
    opacity: 0.8;
    height: 2px;
  }
  nav.wrapper ul li a:hover:after {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    .wrapper {
      display: none;
    }
  }

  @media only screen and (max-width: 420px) {
    .logo {
      font-size: 30pt;
    }
  }
`;

const Header = () => {
  return (
    <Container>
      <div className="logo">AP</div>
      <nav class="wrapper">
        <ul>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#experience">EXPERIENCE</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
