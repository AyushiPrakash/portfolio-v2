import React from "react";
import styled from "styled-components";
import { Title, Header } from "../shared/";


const Container = styled.main`
  min-height: 100vh;
  background-color: ${(props) => props.theme.backgroundPrimary};

  .title {
    text-align: right;
  }
`;

const Experience = () => {
  return (
    <Container id="experience">
      <Title className="title">Experience</Title>
    </Container>
  );
};

export default Experience;
