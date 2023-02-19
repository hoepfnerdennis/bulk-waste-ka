import { GetStaticPropsResult, InferGetStaticPropsType } from "next";
import {
  DateFormat,
  getAppointmentsWithinInterval,
  getNextWeekInterval,
} from "@/actions";
import { Appointment } from "@/types";
import { AppointmentsTable, Page } from "@/components";
import { t } from "@/config/i18n";

export default function NextPage({
  appointments,
  title,
  subtitle,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Page title={title} subtitle={subtitle}>
      <AppointmentsTable appointments={appointments} />
    </Page>
  );
}

export function getStaticProps(): GetStaticPropsResult<{
  appointments: Appointment[];
  title: string;
  subtitle: string;
}> {
  const nextWeekInterval = getNextWeekInterval();
  const appointments = getAppointmentsWithinInterval(nextWeekInterval);
  const title = t("week.next");
  const from = DateFormat.toString(nextWeekInterval.start);
  const to = DateFormat.toString(nextWeekInterval.end);
  const subtitle = `${from} - ${to}`;

  return {
    revalidate: 60 * 60 * 24,
    props: { title, subtitle, appointments },
  };
}
