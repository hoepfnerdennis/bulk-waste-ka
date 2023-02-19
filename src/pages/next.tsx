import { GetStaticPropsResult, InferGetStaticPropsType } from "next";
import {
  DateFormat,
  getAppointmentsWithinInterval,
  getNextWeekInterval,
} from "@/actions";
import { Appointment } from "@/types";
import { AppointmentsTable, Page } from "@/components";
import { t } from "@/config/i18n";
import { Typography } from "@mui/material";

export default function NextPage({
  appointments,
  title,
  subtitle,
  lastUpdate,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Page title={title} subtitle={subtitle}>
      <AppointmentsTable appointments={appointments} />
      <Typography variant="body2" textAlign="center" my={2}>
        {t("last.update", { lastUpdate })}
      </Typography>
    </Page>
  );
}

export function getStaticProps(): GetStaticPropsResult<{
  appointments: Appointment[];
  title: string;
  subtitle: string;
  lastUpdate: string;
}> {
  const nextWeekInterval = getNextWeekInterval();
  const appointments = getAppointmentsWithinInterval(nextWeekInterval);
  const title = t("week.next");
  const from = DateFormat.toString(nextWeekInterval.start);
  const to = DateFormat.toString(nextWeekInterval.end);
  const subtitle = `${from} - ${to}`;
  const lastUpdate = DateFormat.toDateTimeString(new Date());

  return {
    revalidate: 60 * 60 * 24,
    props: { title, subtitle, appointments, lastUpdate },
  };
}
