import React from "react";
import styled from "styled-components";
import { Title, Header } from "../shared/";

const Container = styled.main`
  min-height: 100vh;
  background-color: ${(props) => props.theme.backgroundPrimary};
`;

const ProjectContainer = styled.div`
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
  margin-right: auto;
  margin-left: auto;

  .projectCard {
    opacity: 1;
    margin-top: -20em;
    padding: 7rem 0;
    transform: none;
  }
`;


const Projects = () => {
  return (
    <Container>
      <Title>Projects</Title>
      <ProjectContainer>
        <div className="projectCard"></div>
      </ProjectContainer>
    </Container>
  );
};

export default Projects;
