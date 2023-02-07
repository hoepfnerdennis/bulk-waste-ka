import "@/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import type { AppProps } from "next/app";
import {
  AppBar,
  createTheme,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { Container } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1F8A70",
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Container maxWidth="md">
            <Typography
              variant="h6"
              component={Link}
              color="white"
              sx={{ flexGrow: 1, textDecoration: "none" }}
              href="/"
            >
              Sperrmüll Karlsruhe 2023
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" component="main">
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}
