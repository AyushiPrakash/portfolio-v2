import styled from "styled-components";

const Button = styled.button`
  position: relative;
  width: fit-content;
  line-height: 1;
  font-size: 12pt;
  font-weight: 400;
  text-decoration: none;
  background-color: ${(props) => props.theme.backgroundPrimary};
  color: ${(props) => props.theme.textPrimary};
  letter-spacing: 1.5px;
  text-align: center;
  padding: 1rem 2rem;
  border: solid 2px #eedfda;
  outline: none;
  transition: all 0.45s;
  cursor: pointer;

  span {
    display: block;
    position: relative;
    z-index: 2;
  }

  &:after {
    position: absolute;
    z-index: 0;
    content: "";
    top: -1px;
    left: 0;
    width: 0;
    height: calc(100% + 1px);
    background: ${(props) => props.theme.textPrimary};
    transition: all 0.45s;
  }

  &:hover {
    color: ${(props) => props.theme.accentColor};
  }

  &:hover:after {
    width: calc(100% + 1px);
  }
`;

export default Button;
