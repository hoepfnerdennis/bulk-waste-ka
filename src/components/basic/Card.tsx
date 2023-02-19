import { Card as MuiCard, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

export default function Card({
  content,
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
  content?: string;
}) {
  return (
    <MuiCard variant="outlined" sx={{ ":hover": { borderColor: "#1F8A70" } }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        {subtitle && <Typography variant="subtitle1">{subtitle}</Typography>}
        {content && <Typography>{content}</Typography>}
      </CardContent>
    </MuiCard>
  );
}
