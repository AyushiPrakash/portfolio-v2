import React from "react";
import styled from "styled-components";
import { Title, Header } from "../shared/";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { ProjectsData } from "../../content/projectsData";

const Container = styled.main`
  /* min-height: 100vh; */
  background-color: ${(props) => props.theme.backgroundPrimary};

  .projectContainer {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 2rem;

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
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
          rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        transition: box-shadow 400ms linear;
        &:hover {
          box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
            rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        }
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

          .icon {
            font-size: 24px;
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
          display: flex;
          flex-direction: row;
          align-items: center;
          flex-wrap: wrap;
          font-family: "Blinker", sans-serif;
          margin-top: 0.75rem;
          color: ${(props) => props.theme.textSecondary};
          font-size: 12pt;
          font-weight: 300;
          line-height: 16pt;

          .tool {
            margin-right: 0.5em;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 992px) {
    .projectContainer {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .projectCard {
        max-width: 100%;
        margin-left: 0 !important;
        width: 100%;
        &:not(:first-child) {
          margin-top: 0;
        }

        .image {
          height: calc(((100vw - 4rem) * 9) / 16);
        }

        .content {
          height: unset;

          .titleContainer {
            .title {
              font-size: 16pt;
            }
            .icon {
              font-size: 22px;
            }
          }

          .sub {
            font-size: 13pt;
          }

          .tools {
            font-size: 12pt;
            line-height: 14pt;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 420px) {
    .projectContainer {
      .projectCard {
        padding: 1.5rem 0;

        .content {
          padding-top: 1rem;

          .titleContainer {
            .title {
              font-size: 15pt;
            }
            .icon {
              font-size: 20px;
            }
          }

          .sub {
            font-size: 12pt;
            line-height: 16pt;
          }

          .tools {
            font-size: 11.5pt;
          }
        }
      }
    }
  }
`;

const Projects = () => {
  return (
    <Container id="projects">
      <Title>Projects</Title>
      <div className="projectContainer">
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
                      <FaGithub className="icon" />
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
                      <BsBoxArrowUpRight className="icon" />
                    </a>
                  )}
                </div>

                <div className="sub">{project.description}</div>
                <div className="tools">
                  {project.tools.map((tool) => (
                    <span className="tool">{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Projects;
