import React from "react";
import styled from "styled-components";
import { Title, Header } from "../shared/";

const Container = styled.main`
  min-height: 100vh;
  background-color: ${(props) => props.theme.backgroundPrimary};
`;

const ProjectContainer = styled.section``;


const Projects = () => {
  return (
    <Container>
      <Title>Projects</Title>
      <ProjectContainer></ProjectContainer>
    </Container>
  );
};

export default Projects;
