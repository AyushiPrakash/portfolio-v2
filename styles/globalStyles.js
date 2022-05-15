import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  transition: all 300ms linear;
  cursor: url("data:image/svg+xml,%3Csvg width='7' height='7' viewBox='0 0 7 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='3.5' cy='3.5' r='3' fill='%23F4F4F2' stroke='%232C2C2C'/%3E%3C/svg%3E%0A") 2 2, auto;
}

  html{
    scroll-behavior: smooth;
  }

  body {
      background-color: ${(props) => props.theme.backgroundPrimary};
  }

  .markdown a{
    color: #ff503f;
  }
  
`;

export default GlobalStyle;
