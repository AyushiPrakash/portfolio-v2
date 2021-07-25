import React, { useState } from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import animationData from "../../content/girlGif.json";
import { Waypoint } from "react-waypoint";

const Container = styled.main`
  background-color: ${(props) => props.theme.backgroundPrimary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .button {
    position: relative;
    display: inline-block;
    margin-top: 1.75rem;
    padding: 1.25rem 2.5rem;
    pointer-events: auto;
    cursor: pointer;
    &::before {
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
    color: ${(props) => props.theme.backgroundPrimary};
    border: 2px solid ${(props) => props.theme.textPrimary};
    background: ${(props) => props.theme.backgroundPrimary};
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

  footer {
    a {
      text-align: center;
      text-decoration: underline;
      color: ${(props) => props.theme.textPrimary};
    }
    div {
      font-size: 12pt;
      margin-bottom: 0.25rem;

      span {
        color: ${(props) => props.theme.accentColor};
      }
    }
  }
`;

const Contact = () => {
  const style = {
    height: 300,
  };

  let [renderLottie, setRenderLottie] = useState(false);

  return (
    <Container id="contact">
      <a
        className="button buttonType interactive"
        href="https://drive.google.com/file/d/1qZN6Z4JCj51wN574WOUb7CrnmER0YDzn/view?usp=sharing"
        target="_blank"
      >
        <span>View Resume</span>
      </a>
      <Waypoint onEnter={() => setRenderLottie(true)} />
      {renderLottie && (
        <Lottie
          animationData={animationData}
          style={style}
          loop={false}
          autoPlay={false}
        />
      )}
      <footer>
        <div>
          Designed and built by <span>Ayushi Prakash </span>{" "}
        </div>
        <a
          className="interactive"
          href="https://github.com/AyushiPrakash/portfolio-v2"
          target="_blank"
        >
          <div>View Source Code</div>
        </a>
      </footer>
    </Container>
  );
};

export default Contact;
