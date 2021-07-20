import React from "react";
import styled from "styled-components";
import { Title, Header } from "../shared/";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { ProjectsData } from "../../content/projectsData";
import Masonry from "react-masonry-css";
import ReactMarkdown from "react-markdown";

const Container = styled.main`
  min-height: 100vh;
  background-color: ${(props) => props.theme.backgroundPrimary};

  .my-masonry-grid {
    display: flex;
    margin-left: -30px;
    width: auto;
    margin-top: 4rem;
  }
  .my-masonry-grid_column {
    padding-left: 20px;
    background-clip: padding-box;
  }

  .my-masonry-grid_column > div {
    margin-bottom: 20px;
  }

  @media (max-width: 900px) {
    .my-masonry-grid {
      margin-left: -15px;
    }
    .my-masonry-grid_column {
      padding-left: 15px;
    }
    .my-masonry-grid_column > div {
      margin-bottom: 15px;
    }
  }

  .projectCard {
    padding: 1rem;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

    .titleContainer {
      display: flex;
      align-items: center;

      .title {
        flex: 1;
        color: ${(props) => props.theme.textPrimary};
        font-size: 18pt;
        font-weight: 500;
        line-height: 24pt;
      }

      .icon {
        font-size: 22px;
      }
    }

    .content {
      flex: 0 0 100%;
      max-width: 100%;
      margin-top: 1rem;
      font-family: "Blinker", sans-serif;
      color: ${(props) => props.theme.textPrimary};
      font-size: 13pt;
      line-height: 20pt;
    }

    .content ul,
    .content ol {
      padding-inline-start: 20px !important;
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

  @media only screen and (max-width: 1100px) {
    .projectCard {
      .titleContainer {
        .title {
          font-size: 16pt;
        }
        .icon {
          font-size: 20.5px;
        }
      }

      .content {
        font-size: 13pt;
      }

      .tools {
        font-size: 12pt;
        line-height: 14pt;
      }
    }
  }

  @media only screen and (max-width: 530px) {
    .my-masonry-grid {
      margin-top: 2rem;
    }

    .projectCard {
      padding: 0.75rem;

      .titleContainer {
        .title {
          font-size: 15pt;
        }
        .icon {
          font-size: 20px;
        }
      }

      .content {
        font-size: 12pt;
        line-height: 16pt;
      }

      .tools {
        font-size: 11.5pt;
      }
    }
  }
`;

const breakpoint = {
  default: 3,
  1100: 3,
  1040: 2,
  780: 1,
};

const cardBgColor = [
  "#faf0f2",
  "#fde9de",
  "#e0e1fc",
  "#d8eff0",
  "#ffdbd7",
  "#cce6cc",
  "#c0ebe8",
];

const Projects = () => {
  return (
    <Container id="projects">
      <Title>Projects</Title>

      <Masonry
        breakpointCols={breakpoint}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {ProjectsData.map((project) => {
          return (
            <div
              className="projectCard"
              style={{
                backgroundColor:
                  cardBgColor[Math.floor(Math.random() * cardBgColor.length)],
              }}
            >
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
              <div className="content">
                <ReactMarkdown>{project.description}</ReactMarkdown>
              </div>
              <div className="tools">
                {project.tools.map((tool) => (
                  <span className="tool">{tool}</span>
                ))}
              </div>
            </div>
          );
        })}
      </Masonry>
    </Container>
  );
};

export default Projects;
