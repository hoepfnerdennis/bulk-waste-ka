import { t } from "@/config/i18n";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

export default function Header() {
  return (
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
            {t("page.title")}
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
