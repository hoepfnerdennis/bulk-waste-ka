import { DateFormat } from "@/actions";
import bulkyWasteAppointments from "@/data/bulkyWasteAppointments.json";
import { compareAsc } from "date-fns";

export function getAppointments() {
  const entries = Object.entries(bulkyWasteAppointments);
  entries.sort(([, date1], [, date2]) => {
    if (!date1) return -1;
    if (!date2) return 1;
    return compareAsc(
      DateFormat.fromString(date1!),
      DateFormat.fromString(date2!)
    );
  });
  return Object.fromEntries(entries);
}
