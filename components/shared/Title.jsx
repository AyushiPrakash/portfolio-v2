import React from "react";
import styled from "styled-components";

const Title = styled.section`
  font-size: 24pt;
  font-weight: 400;

  span {
    color: ${(props) => props.theme.textPrimary};
  }

  span:before {
    content: "";
    display: inline-block;
    width: 8rem;
    vertical-align: middle;
    border-bottom: 2px solid;
  }
`;

export default Title;
