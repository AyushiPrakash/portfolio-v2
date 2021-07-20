import React from "react";
import styled from "styled-components";

const Title = styled.section`
  font-size: 32pt;
  font-weight: 500;
  color: ${(props) => props.theme.textPrimary};

  &:before {
    content: "";
    display: inline-block;
    width: 8rem;
    margin-right: 0.5em;
    vertical-align: middle;
    border-bottom: 3px solid ${(props) => props.theme.textPrimary};
    opacity: 0.8;
  }

  @media only screen and (max-width: 360px) {
    font-size: 24pt;

    &:before {
      width: 6rem;
    }
  }
`;

export default Title;
