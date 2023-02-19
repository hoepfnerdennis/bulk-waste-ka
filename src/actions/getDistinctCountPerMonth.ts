import { BulkyWasteApi } from "@/api";

export default function getDistinctCountPerMonth(): Record<string, number> {
  const uniqueDates = new Set<string>();
  const appointments = BulkyWasteApi.getAppointments();
  Object.values(appointments).forEach((date) => {
    date && uniqueDates.add(date);
  });
  const distinctCountPerMonth: Record<string, number> = {};
  Array.from(uniqueDates).forEach((date) => {
    const [, month] = date.split(".");
    distinctCountPerMonth[month] = distinctCountPerMonth[month]
      ? distinctCountPerMonth[month] + 1
      : 1;
  });
  return distinctCountPerMonth;
}
