import { Grid, Typography } from "@mui/material";
import { GetStaticPropsResult, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { MonthCard, NextWeekCard } from "@/components";
import {
  DateFormat,
  getDistinctCountWithinInterval,
  getDistinctCountPerMonth,
  getNextWeekInterval,
} from "@/actions";
import { t } from "@/config/i18n";
import { Box } from "@mui/system";

export default function HomePage({
  streetsByMonth,
  nextWeek,
  lastUpdate,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{t("page.title")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container gap={2} my={2} justifyContent="center">
        <Grid item xs={12}>
          <NextWeekCard {...nextWeek} />
        </Grid>
        {Object.entries(streetsByMonth)
          .sort()
          .map(([month, count]) => (
            <Grid key={month} item xs={12} sm={5} md={3}>
              <MonthCard month={month} count={count} />
            </Grid>
          ))}
      </Grid>
      <Typography variant="body2" textAlign="center" my={2}>
        {t("last.update", { lastUpdate })}
      </Typography>
    </>
  );
}

export function getStaticProps(): GetStaticPropsResult<{
  streetsByMonth: Record<string, number>;
  nextWeek: {
    count: number;
    from: string;
    to: string;
  };
  lastUpdate: string;
}> {
  const streetsByMonth = getDistinctCountPerMonth();
  const nextWeekInterval = getNextWeekInterval();
  const distinctCountNextWeek =
    getDistinctCountWithinInterval(nextWeekInterval);
  const lastUpdate = DateFormat.toDateTimeString(new Date());

  return {
    revalidate: 60 * 60 * 24,
    props: {
      lastUpdate,
      streetsByMonth,
      nextWeek: {
        count: distinctCountNextWeek,
        from: DateFormat.toString(nextWeekInterval.start),
        to: DateFormat.toString(nextWeekInterval.end),
      },
    },
  };
}
