import { isWithinInterval, isBefore, isAfter } from "date-fns";
const current = "Current Exhibition";
const past = "Past Exhibition";
const future = "Future Exhibition";
export function exhibitionCurrentPast(start_date?: string, end_date?: string) {
  if (start_date && end_date) {
    const start = new Date(start_date);
    const end = new Date(end_date);
    return isWithinInterval(new Date(), {
      start,
      end,
    })
      ? current
      : past;
  }
  if (!start_date && end_date) {
    return isBefore(new Date(), new Date(end_date)) ? current : past;
  }
  if (start_date && !end_date) {
    return isAfter(new Date(), new Date(start_date)) ? current : future;
  }
  return past;
}
export function filterExhibitionCurrent(e: any): boolean {
  const { start_date, end_date, date } = e;
  if (start_date && end_date) {
    const start = new Date(start_date);
    const end = new Date(end_date);
    return isWithinInterval(new Date(), {
      start,
      end,
    });
  }
  if (!start_date && end_date) {
    return isBefore(new Date(), new Date(end_date));
  }
  if (start_date && !end_date) {
    return isAfter(new Date(), new Date(start_date));
  }
  if (date) {
    if (date.indexOf("-") > -1) {
      const [start, end] = date.split("-").map((a: string) => a.trim());
      return filterExhibitionCurrent({ start_date: start, end_date: end });
    } else if (date.indexOf("/") > -1) {
      const dateOnly = date.substr(0, date.indexOf("/")).trim();
      return isBefore(new Date(), new Date(dateOnly));
    }
    return isBefore(new Date(), new Date(date));
  }
  return false;
}
export function filterExhibitionPast(e: any) {
  const { start_date, end_date } = e;
  if (start_date && end_date) {
    const start = new Date(start_date);
    const end = new Date(end_date);
    return !isWithinInterval(new Date(), {
      start,
      end,
    });
  }
  if (!start_date && end_date) {
    return !isBefore(new Date(), new Date(end_date));
  }
  if (start_date && !end_date) {
    return !isAfter(new Date(), new Date(start_date));
  }
  return false;
}
