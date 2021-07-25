import React, { useState } from "react";
import Headroom from "react-headroom";
import styled from "styled-components";
import { Button } from "../shared/";
import { CgDetailsMore } from "react-icons/cg";
import { IoCloseCircle } from "react-icons/io5";

const Container = styled.header`
  width: 100%;
  color: #2c2c2c;
  font-family: "Blinker", sans-serif;
  cursor: pointer;

  .headroom {
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: ${(props) => props.theme.backgroundSecondary};
  }

  .headroom--unfixed {
    position: relative;
    transform: translateY(0);
  }

  .headroom--scrolled {
    transition: transform 200ms ease-in-out;
    box-shadow: 0 10px 30px -12px #c7bbbb;
  }

  .headroom--unpinned {
    position: fixed;
    transform: translateY(-100%);
  }

  .headroom--pinned {
    position: fixed;
    transform: translateY(0%);
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: calc(1200px + 2rem);
    margin: 0 auto;
    padding: 0.65rem 0;

    .logo {
      font-size: 32pt;
      font-weight: 400;
      font-family: "Playfair Display", serif;
    }

    .wrapper ul {
      list-style: none;
      text-align: center;
      li {
        display: inline-block;
        &:not(:first-child) {
          margin-left: 2rem;
        }

        a {
          display: block;
          text-decoration: none;
          color: ${(props) => props.theme.textPrimary};
          font-size: 14pt;
          font-weight: 400;
        }
      }
    }

    .burger {
      display: none;
    }

    @media only screen and (max-width: 720px) {
      .wrapper {
        display: none;
      }

      .burger {
        display: block;
      }
    }

    @media only screen and (max-width: 420px) {
      .logo {
        font-size: 30pt;
      }
    }
  }

  /* //////////////////// Nav Drawer /////////////////// */
  .drawer {
    display: none;
    z-index: 100;
    background-color: ${(props) => props.theme.textPrimary};
    transition: all 400ms linear;
    opacity: ${(props) => (props.openDrawer ? 1 : 0)};

    ul {
      padding: 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .closeButton {
        margin-top: -94px;
      }

      li {
        &:not(:last-child) {
          margin-bottom: 4rem;
        }
        a {
          display: block;
          text-decoration: none;
          color: ${(props) => props.theme.backgroundSecondary};
          font-size: 28pt;
          font-weight: 500;
        }
      }
    }

    @media only screen and (max-width: 720px) {
      display: grid;
      place-items: center;
      position: fixed;
      top: 0;
      left: ${(props) => (props.openDrawer ? 0 : "100%")};
      right: ${(props) => (props.openDrawer ? 0 : "-100%")};
      bottom: 0;
    }

    @media only screen and (max-width: 420px) {
      ul {
        li {
          &:not(:last-child) {
            margin-bottom: 3rem;
          }
          a {
            font-size: 24pt;
          }
        }
      }
    }
  }
`;

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Container openDrawer={openDrawer}>
      <Headroom
        style={{
          webkitTransition: "all .5s ease-in-out",
          mozTransition: "all .5s ease-in-out",
          oTransition: "all .5s ease-in-out",
          transition: "all .5s ease-in-out",
        }}
      >
        <header className="header">
          <div className="logo">AP</div>
          <div className="wrapper">
            <ul>
              <li>
                <a className="interactive" href="#about">
                  ABOUT
                </a>
              </li>
              <li>
                <a className="interactive" href="#experience">
                  EXPERIENCE
                </a>
              </li>
              <li>
                <a className="interactive" href="#projects">
                  PROJECTS
                </a>
              </li>
              <li>
                <a className="interactive" href="#contact">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
          <div className="burger interactive">
            <CgDetailsMore
              size={34}
              onClick={() => {
                setOpenDrawer(true);
              }}
            />
          </div>
        </header>
      </Headroom>

      <div className="drawer">
        <ul>
          <li className="closeButton interactive">
            <IoCloseCircle
              color="#D4C9C9"
              size={36}
              onClick={() => {
                setOpenDrawer(false);
              }}
            />
          </li>
          <li
            className="interactive"
            onClick={() => {
              setOpenDrawer(false);
            }}
          >
            <a className="interactive" href="#about">
              ABOUT
            </a>
          </li>
          <li
            onClick={() => {
              setOpenDrawer(false);
            }}
          >
            <a className="interactive" href="#experience">
              EXPERIENCE
            </a>
          </li>
          <li
            onClick={() => {
              setOpenDrawer(false);
            }}
          >
            <a className="interactive" href="#projects">
              PROJECTS
            </a>
          </li>
          <li
            onClick={() => {
              setOpenDrawer(false);
            }}
          >
            <a className="interactive" href="#contact">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Header;
