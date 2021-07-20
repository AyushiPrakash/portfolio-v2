import { useState } from "react";
import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/globalStyles";
import Head from "next/head";

const theme = {
  textPrimary: "#2C2C2C",
  textSecondary: "#555",
  accentColor: "#ff503f",
  backgroundPrimary: "#F4F4F2",
  backgroundSecondary: "#D4C9C9",
  backgroundHighlight: "#FFFFFF",
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Head>
        <script src="/js/TagCanvas.js"> </script>{" "}
      </Head>{" "}
      <>
        <Component {...pageProps} />{" "}
      </>{" "}
    </ThemeProvider>
  );
}

export default MyApp;
