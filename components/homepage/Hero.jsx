import React from "react";
import styled from "styled-components";
import { Header, Contact, Button } from "../shared/";

const Container = styled.main`
  min-height: 100vh;
  background-color: ${(props) => props.theme.backgroundSecondary};

  .header {
    padding: 0.5rem 1.5rem;
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

    .button {
      position: relative;
      display: inline-block;
      margin-top: 1.75rem;
      padding: 1.25rem 2.5rem;
      pointer-events: auto;

      &::before,
      &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    .buttonType {
      font-size: 13pt;
      font-weight: 500;
      text-decoration: none;
      line-height: 1;
      border-radius: 0.35rem;
      overflow: hidden;
      color: #ffffff;
      border: 2px solid ${(props) => props.theme.textPrimary};
      background: ${(props) => props.theme.backgroundSecondary};
      transition: color 0.4s cubic-bezier(0.3, 1, 0.8, 1);
      &:hover {
        color: ${(props) => props.theme.textPrimary};
      }
      span {
        position: relative;
      }
      &::before {
        content: "";
        background: ${(props) => props.theme.textPrimary};
        width: 120%;
        left: -10%;
        transform: skew(30deg);
        transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
      }
      &:hover::before {
        transform: translate3d(100%, 0, 0);
      }
    }
  }

  @media only screen and (max-width: 560px) {
    .leftSection {
      .info {
        font-size: 48pt;
      }
      .title {
        font-size: 20pt;
      }

      .button {
        margin-top: 2rem;
      }
    }
  }

  @media only screen and (max-width: 440px) {
    .leftSection {
      .info {
        font-size: 42pt;
      }

      .button {
        margin-top: 1.75rem;
      }
    }
  }

  @media only screen and (max-width: 420px) {
    .leftSection {
      .info {
        font-size: 33pt;
      }
      .title {
        font-size: 18pt;
      }
      .button {
        margin-top: 1.25rem;
        padding: 1rem 2rem;
      }
    }
  }
`;

const Hero = () => {
  return (
    <Container>
      <Header className="header" />
      <div className="leftSection">
        <div className="title">Ayushi Prakash</div>
        <div className="info">
          Hello, my <br /> name's Ayushi.
          <br /> I'm a developer & <br /> a designer.
        </div>
        <a
          className="button buttonType interactive"
          href="https://drive.google.com/file/d/1qZN6Z4JCj51wN574WOUb7CrnmER0YDzn/view?usp=sharing"
          target="_blank"
        >
          <span>Resume</span>
        </a>
      </div>
      <Contact />
    </Container>
  );
};

export default Hero;
