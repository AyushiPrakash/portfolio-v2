import React from "react";
import styled from "styled-components";

const Title = styled.section`
  font-size: 20pt;
  font-weight: 400;
  color: ${(props) => (props.color ? props.color : props.theme.textPrimary)};
  

  &:before {
    content: "";
    display: inline-block;
    width: 6.5rem;
    margin-right:    0.5em;
    vertical-align: middle;
    border-bottom: 2px solid
      ${(props) => (props.color ? props.color : props.theme.textPrimary)};
  }
`;

export default Title;
