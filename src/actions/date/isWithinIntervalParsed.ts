import { Interval, isWithinInterval } from "date-fns";
import DateFormat from "./DateFormat";

export default function isWithinIntervalParsed(
  date: string,
  interval: Interval
) {
  const parsedDate = DateFormat.fromString(date);
  return isWithinInterval(parsedDate, interval);
}
