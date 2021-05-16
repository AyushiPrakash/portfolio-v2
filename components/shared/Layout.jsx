import React from "react";
import styled from "styled-components";

const Container = styled.main`
  background-color: ${(props) => props.theme.backgroundSecondary};
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Layout = (props) => {
  return <Container>{props.children}</Container>;
};

export default Layout;
