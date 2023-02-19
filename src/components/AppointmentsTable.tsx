import { DateFormat } from "@/actions";
import { t } from "@/config/i18n";
import { Appointment } from "@/types";
import { Box } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridRowsProp,
} from "@mui/x-data-grid";
import { LinkToGoogleMaps } from "./maps";

export default function AppointmentsTable({
  appointments,
}: {
  appointments: Appointment[];
}) {
  const rows: GridRowsProp = appointments.map(({ date, street }, id) => {
    return { id, date, street };
  });
  const columns: GridColDef[] = [
    {
      field: "date",
      headerName: t("table.header.date"),
      type: "date",
      width: 100,
    },
    {
      field: "day",
      headerName: t("table.header.day"),
      renderCell: ({ row }: GridRenderCellParams<string>) =>
        DateFormat.toDayString(row.date),
      width: 10,
    },
    {
      field: "street",
      headerName: t("table.header.street"),
      minWidth: 200,
      renderCell: ({ row }: GridRenderCellParams<string>) => (
        <Box ml={-2}>
          <LinkToGoogleMaps place={row.street} />
          {row.street}
        </Box>
      ),
    },
  ];
  return (
    <Box height="80vh">
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
