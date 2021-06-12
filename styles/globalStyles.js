import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  html{
    scroll-behavior: smooth;
  }

  body {
      background-color: ${(props) => props.theme.backgroundPrimary};
  }
  
`;

export default GlobalStyle;
