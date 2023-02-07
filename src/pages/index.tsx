import { MONTHS } from "@/data";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { GetStaticPropsResult, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import dates from "@/data/dates.json";

export default function Home({
  streetsByMonth,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Sperrmüll Karlsruhe 2023</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container gap={2} my={2} justifyContent="center">
        {Object.entries(streetsByMonth)
          .sort()
          .map(([month, count]) => (
            <Grid
              key={month}
              item
              xs={6}
              sm={3}
              component={Link}
              href={`/month/${month}`}
              sx={{ textDecoration: "none" }}
            >
              <Card
                variant="outlined"
                raised
                sx={{ ":hover": { borderColor: "#1F8A70" } }}
              >
                <CardContent>
                  <Typography variant="h5">{MONTHS[month]}</Typography>
                  <Typography>{count}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export function getStaticProps(): GetStaticPropsResult<{
  streetsByMonth: Record<string, number>;
}> {
  const streetsByMonth = Object.values(dates).reduce<Record<string, number>>(
    (prev, date) => {
      if (!date) return prev;
      const [, month] = date.split(".");
      prev[month] = prev[month] ? prev[month] + 1 : 1;
      return prev;
    },
    {}
  );
  return {
    props: {
      streetsByMonth,
    },
  };
}
