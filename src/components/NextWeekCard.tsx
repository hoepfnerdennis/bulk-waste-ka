import { t } from "@/config/i18n";
import { Card, LinkNotDecorated } from "./basic";

export default function NextWeekCard({
  count,
  from,
  to,
}: {
  from: string;
  to: string;
  count?: number;
}) {
  return (
    <LinkNotDecorated href="/next">
      <Card
        title={t("week.next")}
        subtitle={`${from} - ${to}`}
        content={count ? t("appointments.count", { count }) : undefined}
      />
    </LinkNotDecorated>
  );
}
