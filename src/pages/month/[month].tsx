import {
  GetServerSidePropsContext,
  GetStaticPathsResult,
  GetStaticPropsResult,
  InferGetStaticPropsType,
} from "next";
import dates from "@/data/dates.json";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { Box } from "@mui/system";

export default function Month({
  streets,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const rows: GridRowsProp = streets.map(({ date, street }, id) => {
    return { id, date, street };
  });
  const columns: GridColDef[] = [
    { field: "date", headerName: "Datum", type: "date", width: 150 },
    { field: "street", headerName: "Straße", minWidth: 200 },
  ];

  return (
    <Box height="80vh" my={2}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          sorting: {
            sortModel: [{ field: "date", sort: "asc" }],
          },
        }}
      />
    </Box>
  );
}

export function getStaticProps({
  params,
}: GetServerSidePropsContext): GetStaticPropsResult<{
  streets: {
    street: string;
    date: string;
  }[];
}> {
  const streetsByMonth = Object.entries(dates).reduce<
    Record<string, { street: string; date: string }[]>
  >((prev, [street, date]) => {
    if (!date) return prev;
    const [, month] = date.split(".");
    prev[month] = prev[month] || [];
    prev[month].push({ street, date });
    return prev;
  }, {});
  const streets = streetsByMonth[params?.month?.toString() || ""];
  return {
    props: { streets },
  };
}

export function getStaticPaths(): GetStaticPathsResult {
  const pathsSet = new Set<{ params: { month: string } }>();
  Object.values(dates).forEach((date) => {
    if (!date) return;
    const [, month] = date.split(".");
    pathsSet.add({ params: { month } });
  });
  const paths = Array.from(pathsSet);
  return {
    paths,
    fallback: false,
  };
}
