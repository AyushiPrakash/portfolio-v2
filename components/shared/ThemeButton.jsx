import styled from "styled-components";

import { FiSun } from "react-icons/fi";
import { HiOutlineMoon } from "react-icons/hi";

const Button = styled.span`
  cursor: pointer;
  /* .corner {
    fill: ${({ theme }) => theme.backgroundSecondary};
    position: absolute;
    top: 0;
    border: 0;
    right: 0;
    transition: fill 500ms ease;

    &:hover {
      filter: opacity(0.8);
    }
  } */
  @keyframes zoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
  .icon {
    position: absolute;
    top: 0;
    border: 0;
    right: 0;
    z-index: 10;
    margin: 0.75rem 0.75rem 0 0;
    animation: zoom 500ms ease;

    &:hover {
      filter: opacity(0.8);
    }
  }
`;

const ThemeButton = (props) => {
  return (
    <Button onClick={props.toggleTheme} aria-label="Toggle Theme">
      {props.darkMode ? (
        <HiOutlineMoon className="icon" color="#2c2c2c" size={24} />
      ) : (
        <FiSun className="icon" color="#2c2c2c" size={24} />
      )}
    </Button>
  );
};

export default ThemeButton;
