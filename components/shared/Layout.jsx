import React from "react";
import styled from "styled-components";

const Container = styled.main`
  background-color: ${(props) => props.theme.backgroundPrimary};
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  main {
    padding-top: 8rem;
  }
  main:last-child {
    padding-bottom: 8rem;
  }

  @media only screen and (max-width: 930px) {
    main {
      padding-top: 4rem;
    }
    main:last-child {
      padding-bottom: 4rem;
    }
  }
`;

const Layout = (props) => {
  return <Container>{props.children}</Container>;
};

export default Layout;
