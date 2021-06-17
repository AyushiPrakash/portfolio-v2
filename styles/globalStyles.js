import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  transition: all 300ms linear;
}

  html{
    scroll-behavior: smooth;
  }

  body {
      background-color: ${(props) => props.theme.backgroundPrimary};
  }
  
`;

export default GlobalStyle;
