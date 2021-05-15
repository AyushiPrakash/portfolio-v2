import React from "react";
import styled from "styled-components";

const Container = styled.main`
  background-color: ${(props) => props.theme.backgroundSecondary};
`;

const Layout = (props) => {
  return <Container>{props.children}</Container>;
};

export default Layout;
