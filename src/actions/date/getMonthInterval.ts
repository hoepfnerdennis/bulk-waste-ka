import { endOfMonth, startOfMonth } from "date-fns";
import DateFormat from "./DateFormat";

export default function getMonthInterval(month: string) {
  const date = DateFormat.getDateByMonth(month);
  const start = startOfMonth(date);
  const end = endOfMonth(date);
  return { start, end };
}
