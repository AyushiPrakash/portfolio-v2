import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      theme={{
        textPrimary: "#2C2C2C",
        textSecondary: "#666",
        accentColor: "#ff503f",
        backgroundPrimary: "#F4F4F2",
        backgroundSecondary: "#D4C9C9",
      }}
    >
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
