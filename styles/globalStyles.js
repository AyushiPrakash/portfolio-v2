import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
      background-color: ${(props) => props.theme.backgroundPrimary};

  }
  
`;

export default GlobalStyle;
