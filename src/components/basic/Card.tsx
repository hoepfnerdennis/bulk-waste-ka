import {
  Card as MuiCard,
  CardContent,
  styled,
  Typography,
} from "@mui/material";

const CustomCard = styled(MuiCard)<{ inverted?: boolean }>`
  color: ${({ inverted }) => inverted && "#FFFFFF"};
  background-color: ${({ inverted, theme }) =>
    inverted && theme.palette.primary.main};
  :hover {
    border-color: #1f8a70;
  }
`;

export default function Card({
  content,
  title,
  subtitle,
  inverted,
}: {
  title: string;
  subtitle?: string;
  content?: string;
  inverted?: boolean;
}) {
  return (
    <CustomCard variant="outlined" inverted={inverted}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        {subtitle && <Typography variant="subtitle1">{subtitle}</Typography>}
        {content && <Typography>{content}</Typography>}
      </CardContent>
    </CustomCard>
  );
}
