import { BulkyWasteApi } from "@/api";
import { Interval } from "date-fns";
import { isWithinIntervalParsed } from "./date";

export default function getDistinctCountWithinInterval(
  interval: Interval
): number {
  const uniqueDates = new Set<string>();
  const appointments = BulkyWasteApi.getAppointments();
  Object.values(appointments).forEach((date) => {
    date && uniqueDates.add(date);
  });
  let distinctCountNextWeek = 0;
  Array.from(uniqueDates).forEach((date) => {
    if (isWithinIntervalParsed(date, interval)) {
      distinctCountNextWeek += 1;
    }
  });
  return distinctCountNextWeek;
}
