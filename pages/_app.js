import { useState } from "react";
import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/globalStyles";
import Head from "next/head";
import ThemeButton from "../components/shared/ThemeButton";

const lightTheme = {
  textPrimary: "#2C2C2C",
  textSecondary: "#666",
  accentColor: "#ff503f",
  backgroundPrimary: "#F4F4F2",
  backgroundSecondary: "#D4C9C9",
  backgroundHighlight: "#FFFFFF",
};

const darkTheme = {
  textPrimary: "#F4F4F2",
  textSecondary: "#999999",
  accentColor: "#ff503f",
  backgroundPrimary: "#1a1a1a",
  backgroundSecondary: "#D4C9C9",
  backgroundHighlight: "#2c2c2c",
};

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Head>
        <script src="/js/TagCanvas.js"></script>
      </Head>
      <>
        <ThemeButton toggleTheme={toggleTheme} darkMode={darkMode} />
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  );
}

export default MyApp;
