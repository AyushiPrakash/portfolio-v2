import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const CustomCursor = styled.div`
  width: 32px;
  height: 32px;
  border: 2px solid ${(props) => props.theme.textSecondary};
  border-radius: 50%;
  pointer-events: none;
  z-index: 200;
  position: absolute;
  transition-duration: 200ms;
  transition-timing-function: ease-out;

  &.expand {
    animation: cursorAnim 0.5s forwards;
    border: 1px solid ${(props) => props.theme.textSecondary};
  }

  @keyframes cursorAnim {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(3);
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;

const Cursor = () => {
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleMouseClick);
    document.addEventListener("scroll", handleMouseScroll);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleMouseClick);
      document.addEventListener("scroll", handleMouseScroll);
    };
  }, []);

  const handleMouseMove = (e) => {
    const cursor = document.getElementById("custom-cursor");
    cursor.style.top = `${e.pageY - 10}px`;
    cursor.style.left = `${e.pageX - 10}px`;
  };

  const handleMouseClick = (e) => {
    const cursor = document.getElementById("custom-cursor");
    cursor.classList.add("expand");
    setTimeout(() => {
      cursor.classList.remove("expand");
    }, 500);
  };

  const handleMouseScroll = (e) => {
    console.log(window.scrollY);
  };

  return <CustomCursor id="custom-cursor" />;
};

export default Cursor;
