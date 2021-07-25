import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const CustomCursor = styled.div`
  width: 37px;
  height: 37px;
  top: -18px;
  left: -18px;
  pointer-events: none;
  z-index: 200;
  position: absolute;
  transition-duration: 50ms;
  transition-timing-function: ease-out;

  &.expand {
    animation: cursorAnim 0.5s forwards;
    border: 1px solid ${(props) => props.theme.textSecondary};
  }

  .cursor_circle-base {
    stroke: #000;
    opacity: 0.25;
  }

  .cursor_circle-progress {
    stroke: #000;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    transition: stroke-dashoffset 0.25s;
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
    document.addEventListener("wheel", handleMouseScroll);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleMouseClick);
      document.addEventListener("wheel", handleMouseScroll);
    };
  }, []);

  const handleMouseMove = (e) => {
    const cursor = document.getElementById("custom-cursor");

    const elements = document.elementsFromPoint(e.clientX, e.clientY);
    const isOverInteractive = elements.some((el) =>
      el.classList.contains("interactive")
    );
    let scale = 1;
    if (isOverInteractive) {
      scale = 1.5;
    }
    cursor.style.transform = `translate3d(${e.pageX}px, ${e.pageY}px, 0) scale3d(${scale}, ${scale}, ${scale})`;
  };

  const handleMouseClick = (e) => {
    const cursor = document.getElementById("custom-cursor");
    cursor.classList.add("expand");
    setTimeout(() => {
      cursor.classList.remove("expand");
    }, 500);
  };

  const handleMouseScroll = (e) => {
    const cursorProgress = document.getElementById("cursor-progress");
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const progress = (1 - winScroll / height) * 125.664;
    cursorProgress.style.strokeDashoffset = progress.toFixed(2);
    handleMouseMove(e);
  };

  return (
    <>
      <CustomCursor id="custom-cursor">
        <svg
          className="cursor_inner"
          width="48"
          height="48"
          viewBox="0 0 48 48"
        >
          <circle
            className="cursor_circle-base"
            fill="transparent"
            strokeWidth="2"
            r="20"
            cx="24"
            cy="24"
          ></circle>
          <circle
            className="cursor_circle-progress"
            id="cursor-progress"
            fill="transparent"
            strokeWidth="2"
            r="20"
            cx="24"
            cy="24"
            style={{
              strokeDasharray: "125.664, 125.664",
            }}
          ></circle>
        </svg>
      </CustomCursor>
    </>
  );
};

export default Cursor;
