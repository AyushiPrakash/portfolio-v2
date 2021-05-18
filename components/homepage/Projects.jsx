import React from "react";
import styled from "styled-components";
import { Title, Header } from "../shared/";

const Container = styled.main`
  min-height: 100vh;
  background-color: ${(props) => props.theme.backgroundPrimary};
`;

const ProjectContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;


const Projects = () => {
  return (
    <Container>
      <Title>Projects</Title>
      <ProjectContainer>
        <img src="" />
      </ProjectContainer>
    </Container>
  );
};

export default Projects;
