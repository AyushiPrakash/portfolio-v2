import React, { useState } from "react";
import styled from "styled-components";
import { Title, Header } from "../shared/";

const Container = styled.main`
  min-height: 100vh;
  background-color: ${(props) => props.theme.backgroundPrimary};
  padding: 0 1.5rem;

  .title {
    text-align: right;
  }

  /* Style the tab */
  .tab {
    float: left;
    border: 1px solid #ccc;
    background-color: #f1f1f1;
    width: 30%;
    height: 300px;
  }

  /* Style the buttons that are used to open the tab content */
  .tab button {
    display: block;
    background-color: inherit;
    color: black;
    padding: 22px 16px;
    width: 100%;
    border: none;
    outline: none;
    text-align: left;
    cursor: pointer;
    transition: 0.3s;
    /* Change background color of buttons on hover */

    &:hover {
      background-color: #ddd;
    }
    /* Create an active/current "tab button" class */

    &.active {
      background-color: #ccc;
    }
  }

  /* Style the tab content */
  .tabcontent {
    float: left;
    padding: 0px 12px;
    border: 1px solid #ccc;
    width: 70%;
    border-left: none;
    height: 300px;

    &.active   {
      display: block;
    }

    &:not(.active)   {
      display: none;
    }
  }
`;

const Experience = () => {
  const [active, setActive] = useState("london");

  const handleTabChange = (e) => {
    setActive(e.target.id);
  };

  return (
    <Container id="experience">
      <Title className="title">Experience</Title>

      <div className="tab">
        <button
          id="london"
          className={`tablinks ${active === "london" ? "active" : ""}`}
          onClick={handleTabChange}
        >
          London
        </button>
        <button
          id="paris"
          className={`tablinks ${active === "paris" ? "active" : ""}`}
          onClick={handleTabChange}
        >
          Paris
        </button>
        <button
          id="tokyo"
          className={`tablinks ${active === "tokyo" ? "active" : ""}`}
          onClick={handleTabChange}
        >
          Tokyo
        </button>
      </div>

      <div className={`tabcontent ${active === "london" ? "active" : ""}`}>
        <h3>London</h3>
        <p>London is the capital city of England.</p>
      </div>

      <div className={`tabcontent ${active === "paris" ? "active" : ""}`}>
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>

      <div className={`tabcontent ${active === "tokyo" ? "active" : ""}`}>
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>
    </Container>
  );
};

export default Experience;
