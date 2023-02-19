import { BulkyWasteApi } from "@/api";
import { DateFormat } from "./date";

export default function getMonthsWithService() {
  const appointments = BulkyWasteApi.getAppointments();
  const months = new Set<string>();
  Object.values(appointments).forEach((date) => {
    if (!date) return;
    const month = DateFormat.getMonth(date);
    months.add(month);
  });
  return Array.from(months);
}
