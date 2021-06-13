import React, { useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { Title, Header } from "../shared/";
import { SkillSet } from "../../content/skillsSet";

const Container = styled.main`
  min-height: 100vh;
  background-color: ${(props) => props.theme.backgroundPrimary};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  .leftSection {
    max-width: 900px;
    width: 100%;
    flex: 6;
    overflow-x: hidden;

    p {
      font-size: 13pt;
      font-weight: 400;
      opacity: 0.9;
      margin-bottom: 1.25rem;
      color: ${(props) => props.theme.textPrimary};

      a {
        color: ${(props) => props.theme.accentColor};
        text-decoration: none;
      }
    }

    ul {
      display: grid;
      grid-template-columns: repeat(2, minmax(140px, 200px));
      padding: 0;
      margin: 20px 0 0 0;
      overflow: hidden;
      list-style: none;
      color: ${(props) => props.theme.textPrimary};

      li {
        position: relative;
        margin-bottom: 0.75rem;
        padding-left: 20px;

        &:before {
          content: "▹";
          position: absolute;
          left: 0;
          color: ${(props) => props.theme.accentColor};
          line-height: 20px;
        }
      }
    }
  }

  .rightSection {
    display: grid;
    place-items: center;
    flex: 2;
    padding: 0 2rem;

    canvas {
      width: calc(100% - 4rem);
      min-width: 480px;
      height: auto;
    }
  }

  @media only screen and (max-width: 420px) {
    .leftSection {
      p {
        font-size: 12pt;
      }
    }
  }

  @media only screen and (max-width: 930px) {
    display: block;
    margin-top: 4rem;

    .leftSection {
      align-self: center;
    }

    .rightSection {
      padding: 0;
      width: 100%;

      canvas {
        width:     100%;
        min-width: 0;
      }
    }
  }
`;

const About = () => {
  const theme = useTheme();

  useEffect(() => {
    eval(
      `try {TagCanvas.Start('myCanvas', '',
         {textColour: '${theme.textPrimary}',
         outlineColour: 'transparent',         
         imageMode: "both", 
         shape: 'hcylinder',
         lock: 'x',
         imagePosition:"top", 
         initial: [0,-0.1],
         fadeIn: 3000,
         zoom:0.9,
         wheelZoom: false,
         pinchZoom: true,
         shuffleTags: true,
         frontSelect: true,
         textHeight: 14,
         reverse: true,
         depth: 0.5,
         maxSpeed: 0.04,
         minSpeed: 0.02});
          }
          catch(e)
          {
            console.log(e)
            document.getElementById('myCanvasContainer').style.display = 'none';
          } `
    );
  }, [theme]);

  return (
    <Container id="about">
      <div className="leftSection">
        <Title>About Me</Title>
        <p>Hello, I'm Ayushi.</p>
        <p>
          I'm currently a third year student at
          <a href="https://www.srmist.edu.in/" target="_blank">
            {" "}
            SRM Institute of Science and Technology{" "}
          </a>
          pursuing a degree in Electronics and Communication Engineering.
        </p>
        <p>
          I'm front-end developer, passionate about building and designing
          beautiful and functional user experiences.
        </p>
        <p>
          I aspire towards a career that will allow me to channel my creativity
          through crafting beautiful websites and engaging experiences.
        </p>

        <p>Here are a few technologies I've been working with recently :</p>
        <ul>
          <li>React.js</li>
          <li>Firebase</li>
          <li>Next.js</li>
          <li>Three.js</li>
        </ul>
      </div>
      <div className="rightSection">
        <canvas width="650" height="650" id="myCanvas">
          <p>
            Anything in here will be replaced on browsers that support the
            canvas element
          </p>
          <ul>
            {SkillSet.map((item) => (
              <a
                key={item.name}
                href="#"
                id={item.name}
                onClick={(e) => {
                  e.preventDefault();
                  eval(
                    `TagCanvas.TagToFront("myCanvas", {id: "${item.name}", active: 1});`
                  );
                }}
              >
                <li>
                  <img
                    width="50"
                    height="50"
                    src={`/images/svg/${item.image}.svg`}
                  />
                  {item.name}
                </li>
              </a>
            ))}
          </ul>
        </canvas>
      </div>
    </Container>
  );
};

export default About;
