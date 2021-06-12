import React from "react";
import styled from "styled-components";

const Container = styled.main`
  min-height: 100vh;
  background-color: ${(props) => props.theme.backgroundPrimary};
`;

const Contact = () => {
  return <Container id="contact"></Container>;
};

export default Contact;
