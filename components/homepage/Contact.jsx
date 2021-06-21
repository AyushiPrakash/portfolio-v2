import React from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import animationData from "../../content/girlGif.json";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";

const Container = styled.main`
  background-color: ${(props) => props.theme.backgroundPrimary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .handles {
    a {
      .icon {
        font-size: 18pt;
        color: ${(props) => props.theme.accentColor};
        margin-bottom: 1rem;
      }
    }
  }

  footer {
    font-size: 11.5pt;
  }
`;

const Contact = () => {

  const style = {
    height: 300,
  };

  return (
    <Container id="contact">
      <Lottie
        animationData={animationData}
        style={style}
        loop={false}
        autoPlay={false}
      />
      <div className="handles">
        <a href="https://github.com/AyushiPrakash" target="_blank">
          {" "}
          <FaGithub className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/ayushi-prakash-9b14b4180/"
          target="_blank"
        >
          <FaLinkedinIn className="icon" />
        </a>

        <a href="https://dribbble.com/AyushiPrakash" target="_blank">
          <FaDribbble className="icon" />
        </a>
        <a href="https://www.hackerrank.com/aprakash162001" target="_blank">
          <FaHackerrank className="icon" />
        </a>
        <a href="mailto:ayushiprakash03@gmail.com" target="_blank">
          <FaRegEnvelope className="icon" />
        </a>
      </div>
      <footer>Designed and built by Ayushi Prakash</footer>
    </Container>
  );
};

export default Contact;
