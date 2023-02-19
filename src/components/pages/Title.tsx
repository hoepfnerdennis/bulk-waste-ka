import { Stack, Typography } from "@mui/material";

export default function Title({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <Stack>
      <Typography variant="h5">{title}</Typography>
      {subtitle && <Typography variant="subtitle1">{subtitle}</Typography>}
    </Stack>
  );
}
