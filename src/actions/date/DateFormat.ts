import { DATE_FORMAT } from "@/config/constants";
import { format, parse } from "date-fns";
import { de } from "date-fns/locale";

class DateFormat {
  static toString(date: Date) {
    return format(date, DATE_FORMAT);
  }
  static fromString(date: string) {
    return parse(date, DATE_FORMAT, new Date());
  }
  static toDayString(date: string | Date) {
    date = DateFormat.toDate(date);
    return format(date, "eeeeee", { locale: de });
  }
  static toMonthString(date: string | Date) {
    date = DateFormat.toDate(date);
    return format(date, "MMMM", { locale: de });
  }
  /**
   * @returns the month as string with leading zero
   */
  static getMonth(date: string | Date) {
    date = DateFormat.toDate(date);
    return format(date, "MM");
  }
  /**
   * @returns the month as string with leading zero
   */
  static validateMonth(month: string) {
    return month.padStart(2, "0");
  }
  /**
   *
   * @param month as string with leading zero
   * @returns the first day of the month as Date
   */
  static getDateByMonth(month: string) {
    const numberMonth = Number(month) - 1;
    const date = new Date();
    date.setDate(1);
    date.setMonth(numberMonth);
    return date;
  }
  private static toDate(date: string | Date) {
    if (typeof date === "string") {
      date = DateFormat.fromString(date);
    }
    return date;
  }
}

export default DateFormat;
