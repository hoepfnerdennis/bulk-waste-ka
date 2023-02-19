import { Stack } from "@mui/material";
import { PropsWithChildren } from "react";
import Title from "./Title";

export default function Page({
  children,
  title,
  subtitle,
}: PropsWithChildren<{ title: string; subtitle?: string }>) {
  return (
    <Stack my={2} gap={1}>
      <Title title={title} subtitle={subtitle} />
      {children}
    </Stack>
  );
}
