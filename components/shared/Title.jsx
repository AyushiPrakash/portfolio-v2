import React from "react";
import styled from "styled-components";

const Title = styled.section`
  font-size: 32pt;
  font-weight: 400;
  color: ${(props) => props.theme.textPrimary};
  opacity: 0.9;
  margin-bottom: 6rem;

  &:before {
    content: "";
    display: inline-block;
    width: 8rem;
    margin-right: 0.5em;
    vertical-align: middle;
    border-bottom: 3px solid ${(props) => props.theme.textPrimary};
    opacity: 0.9;
  }

  @media only screen and (max-width: 534px) {
    font-size: 24pt;
    margin-bottom: 2rem !important;

    &:before {
      width: 6.5rem;
    }
  }

  @media only screen and (max-width: 360px) {
    font-size: 22pt;

    &:before {
      width: 5rem;
    }
  }
`;

export default Title;
