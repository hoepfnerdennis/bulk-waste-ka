import { addDays } from "date-fns";

export default function getNextWeekInterval() {
  const start = new Date();
  const end = addDays(start, 7);
  return { start, end };
}
