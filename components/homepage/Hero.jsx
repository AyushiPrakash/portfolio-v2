import React from "react";
import styled from "styled-components";

const Container = styled.main`
  min-height: 100vh;
  background-color: ${(props) => props.theme.backgroundSecondary};
`;

const Hero = () => {
  return <Container></Container>;
};

export default Hero;
