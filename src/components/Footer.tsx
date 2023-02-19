import { Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import { t } from "@/config/i18n";
import NextLink from "next/link";
import { styled } from "@mui/material";

export const FooterContainer = styled("footer")`
  padding: ${({ theme }) => theme.spacing(4, 0)};
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: #ffffff;
`;

export const Link = styled(NextLink)`
  color: #ffffff;
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Container maxWidth="md">
        <Stack alignItems="center" gap={1}>
          <Typography>{t("footer.message")}</Typography>
          <Link
            href="https://github.com/hoepfnerdennis/bulk-waste-ka"
            target="_blank"
          >
            <GitHubIcon />
          </Link>
          <Link
            href="https://web6.karlsruhe.de/service/abfall/akal/akal.php"
            target="_blank"
          >
            {t("footer.data.source")}
          </Link>
        </Stack>
      </Container>
    </FooterContainer>
  );
}
