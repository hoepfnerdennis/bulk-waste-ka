import { DateFormat } from "@/actions";
import { t } from "@/config/i18n";
import { Appointment } from "@/types";
import { LinkToGoogleMaps } from "./maps";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Table } from "./basic";

const columns = [
  {
    header: t("table.header.date"),
    renderCell: ({ date }: Appointment) => date,
  },
  {
    header: t("table.header.day"),
    center: true,
    renderCell: ({ date }: Appointment) => DateFormat.toDayString(date),
  },
  {
    header: <OpenInNewIcon />,
    center: true,
    renderCell: ({ street }: Appointment) => (
      <LinkToGoogleMaps place={street} />
    ),
  },
  {
    header: t("table.header.street"),
    renderCell: ({ street }: Appointment) => street,
  },
];

export default function AppointmentsTable({
  appointments,
}: {
  appointments: Appointment[];
}) {
  return <Table columns={columns} rows={appointments} />;
}
