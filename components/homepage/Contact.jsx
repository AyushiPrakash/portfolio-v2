import React from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import animationData from "../../content/girlGif.json";

const Container = styled.main`
  /* min-height: 100vh; */
  background-color: ${(props) => props.theme.backgroundPrimary};
`;

const Contact = () => {

  const style = {
    height: 300,
  };

  return (
    <Container id="contact">
      <Lottie
        animationData={animationData}
        style={style}
        loop={false}
        autoPlay={false}
      />
    </Container>
  );
};

export default Contact;
