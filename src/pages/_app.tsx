import "@/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import theme from "@/config/theme";
import { Header, Footer } from "@/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container maxWidth="md" component="main">
        <Component {...pageProps} />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
