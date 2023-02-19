import {
  GetServerSidePropsContext,
  GetStaticPathsResult,
  GetStaticPropsResult,
  InferGetStaticPropsType,
} from "next";
import {
  DateFormat,
  getAppointmentsWithinInterval,
  getMonthsWithService,
} from "@/actions";
import { Appointment } from "@/types";
import { AppointmentsTable, Page } from "@/components";
import getMonthInterval from "@/actions/date/getMonthInterval";

export default function MonthPage({
  appointments,
  title,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Page title={title}>
      <AppointmentsTable appointments={appointments} />
    </Page>
  );
}

export function getStaticProps({
  params,
}: GetServerSidePropsContext): GetStaticPropsResult<{
  appointments: Appointment[];
  title: string;
}> {
  const month = params?.month?.toString() || "";
  const monthInterval = getMonthInterval(month);
  const appointments = getAppointmentsWithinInterval(monthInterval);
  return {
    props: {
      appointments,
      title: DateFormat.toMonthString(monthInterval.start),
    },
  };
}

export function getStaticPaths(): GetStaticPathsResult {
  const paths = getMonthsWithService().map((month) => ({ params: { month } }));
  return {
    paths,
    fallback: false,
  };
}
