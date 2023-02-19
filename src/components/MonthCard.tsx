import { DateFormat } from "@/actions";
import { t } from "@/config/i18n";
import { Card, LinkNotDecorated } from "./basic";

export default function MonthCard({
  count,
  month,
}: {
  month: string;
  count: number;
}) {
  return (
    <LinkNotDecorated href={`/month/${month}`}>
      <Card
        title={DateFormat.toMonthString(DateFormat.getDateByMonth(month))}
        content={t("appointments.count", { count })}
      />
    </LinkNotDecorated>
  );
}
