import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.main`
  position: fixed;
  bottom: 0;
  right: 4rem;

  .handles {
    display: flex;
    flex-direction: column;
    align-items: center;

    &:after {
      content: "";
      display: block;
      height: 6.5rem;
      border-left: 2px solid ${(props) => props.theme.textPrimary};
      opacity: 0.8;
    }

    a {
      .icon {
        font-size: 18pt;
        color: ${(props) => props.theme.textPrimary};
        margin-bottom: 1rem;
      }
    }
  }

  @media only screen and (max-width: 620px) {
    display: none;
  }

  @media only screen and (max-width: 820px) {
    right: 1.5rem;
  }

  @media only screen and (max-width: 1500px) {
    position: absolute;
  }
`;

const Contact = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Contact;
