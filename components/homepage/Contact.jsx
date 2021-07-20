import React, { useState } from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import animationData from "../../content/girlGif.json";
import { Waypoint } from "react-waypoint";
import { render } from "react-dom";

const Container = styled.main`
  background-color: ${(props) => props.theme.backgroundPrimary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
        <a href="https://github.com/AyushiPrakash/portfolio-v2" target="_blank">
          <div>View Source Code</div>
        </a>
      </footer>
    </Container>
  );
};

export default Contact;
