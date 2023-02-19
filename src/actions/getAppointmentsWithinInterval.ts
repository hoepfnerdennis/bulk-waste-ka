import { BulkyWasteApi } from "@/api";
import { Appointment } from "@/types";
import { Interval } from "date-fns";
import { isWithinIntervalParsed } from "./date";

export default function getAppointmentsWithinInterval(interval: Interval) {
  const allAppointments = BulkyWasteApi.getAppointments();
  const appointments: Appointment[] = [];
  Object.entries(allAppointments).forEach(([street, date]) => {
    if (!date) return;
    if (isWithinIntervalParsed(date, interval)) {
      appointments.push({ street, date });
    }
  });
  return appointments;
}
