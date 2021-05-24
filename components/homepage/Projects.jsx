import React from "react";
import styled from "styled-components";
import { Title, Header } from "../shared/";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { ProjectsData } from "../../content/projectsData";

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
    flex: 0 0 45%;
    padding: 2rem 0;
    max-width: 45%;
    position: relative;
    width: 100%;
    &:not(:first-child) {
      margin-top: -16em;
    }

    .image {
      background-position: center 0px;
      background-size: cover;
      background-repeat: no-repeat;
      overflow: hidden;
      margin-top: 0;
      height: 42vh;
      width: 100%;
      border-radius: 0.25rem;
    }

    .content {
      padding: 0;
      padding-top: 2rem;
      height: calc(2rem + 24pt + 0.75rem + 0.75rem + 60pt + 16pt);

      .titleContainer {
        display: flex;
        align-items: center;

        .title {
          flex: 1;
          color: ${(props) => props.theme.textPrimary};
          font-size: 18pt;
          font-weight: 400;
          line-height: 24pt;
        }
      }

      .sub {
        flex: 0 0 100%;
        max-width: 100%;
        margin-top: 0.75rem;
        font-family: "Blinker", sans-serif;
        color: ${(props) => props.theme.textPrimary};
        font-size: 14pt;
        font-weight: 300;
        line-height: 20pt;
      }

      .tools {
        font-family: "Blinker", sans-serif;
        margin-top: 0.75rem;
        color: ${(props) => props.theme.textSecondary};
        font-size: 12pt;
        font-weight: 300;
        line-height: 16pt;
      }
    }
  }
`;

const Projects = () => {
  return (
    <Container>
      <Title>Projects</Title>
      <ProjectContainer>
        {ProjectsData.map((project, index) => {
          return (
            <div
              className="projectCard"
              style={{
                marginLeft: index % 2 === 0 ? "55%" : 0,
              }}
            >
              {project.demoLink ? (
                <a href={project.demoLink} target="_blank">
                  <div
                    className="image"
                    style={{
                      backgroundImage: `url("${project.image}")`,
                    }}
                  ></div>
                </a>
              ) : (
                <div
                  className="image"
                  style={{
                    backgroundImage: `url("${project.image}")`,
                  }}
                ></div>
              )}
              <div className="content">
                <div className="titleContainer">
                  <div className="title">{project.name}</div>

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      style={{
                        color: "#ff503f",
                        height: "24px",
                      }}
                    >
                      <FaGithub size={24} />
                    </a>
                  )}

                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      style={{
                        marginLeft: "8px",
                        color: "#ff503f",
                        height: "24px",
                      }}
                    >
                      <BsBoxArrowUpRight size={24} />
                    </a>
                  )}
                </div>

                <div className="sub">{project.description}</div>
                <div className="tools">
                  {project.tools.map((tool) => (
                    <span style={{ marginRight: "1em" }}>{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </ProjectContainer>
    </Container>
  );
};

export default Projects;
