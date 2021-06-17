import React from "react";
import styled from "styled-components";

const Container = styled.main`
  background-color: ${(props) => props.theme.backgroundPrimary};
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Layout = (props) => {
  return <Container>{props.children}</Container>;
};

export default Layout;
