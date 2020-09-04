import { isWithinInterval, isBefore, isAfter, parse } from "date-fns";
const current = "Current Exhibition";
const past = "Past Exhibition";
const future = "Future Exhibition";
export function exhibitionCurrentPast(start_date?: string, end_date?: string) {
  if (start_date && end_date) {
    const start = parse(start_date, "yyyy.MM.dd", new Date());
    const end = parse(end_date, "yyyy.MM.dd", new Date());
    return isWithinInterval(new Date(), {
      start,
      end,
    })
      ? current
      : past;
  }
  if (!start_date && end_date) {
    return isBefore(new Date(), parse(end_date, "yyyy.MM.dd", new Date()))
      ? current
      : past;
  }
  if (start_date && !end_date) {
    return isAfter(new Date(), parse(start_date, "yyyy.MM.dd", new Date()))
      ? current
      : future;
  }
  return past;
}
export function filterExhibitionCurrent(e: any): boolean {
  const { start_date, end_date, date } = e;
  if (start_date && end_date) {
    const start = parse(start_date, "yyyy.MM.dd", new Date());
    const end = parse(end_date, "yyyy.MM.dd", new Date());
    return isWithinInterval(new Date(), {
      start,
      end,
    });
  }
  if (!start_date && end_date) {
    return isBefore(new Date(), parse(end_date, "yyyy.MM.dd", new Date()));
  }
  if (start_date && !end_date) {
    return isAfter(new Date(), parse(start_date, "yyyy.MM.dd", new Date()));
  }
  if (date) {
    if (date.indexOf("/") > -1) {
      const [start, end] = date.split("-").map((a: string) => a.trim());
      if (end && end.length > 6) {
        return filterExhibitionCurrent({ start_date: start, end_date: end });
      } else {
        return isBefore(new Date(), parse(start, "yyyy.MM.dd", new Date()));
      }
    }
    return isBefore(new Date(), parse(date, "yyyy.MM.dd", new Date()));
  }
  return false;
}
export function filterExhibitionPast(e: any) {
  const { start_date, end_date } = e;
  if (start_date && end_date) {
    const start = parse(start_date, "yyyy.MM.dd", new Date());
    const end = parse(end_date, "yyyy.MM.dd", new Date());
    return !isWithinInterval(new Date(), {
      start,
      end,
    });
  }
  if (!start_date && end_date) {
    return !isBefore(new Date(), parse(end_date, "yyyy.MM.dd", new Date()));
  }
  if (start_date && !end_date) {
    return !isAfter(new Date(), parse(start_date, "yyyy.MM.dd", new Date()));
  }
  return false;
}
