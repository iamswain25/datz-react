import { isWithinInterval, parse, isFuture, isPast } from "date-fns";
const current = "Current Exhibition";
const past = "Past Exhibition";
const upcoming = "Upcoming Exhibition";
export function exhibitionCurrentPast(start_date?: string, end_date?: string) {
  const now = new Date();
  if (start_date && end_date) {
    const start = parse(start_date, "yyyy.MM.dd", now);
    const end = parse(end_date, "yyyy.MM.dd", now);
    if (
      isWithinInterval(now, {
        start,
        end,
      })
    ) {
      return current;
    } else if (isFuture(start) && isFuture(end)) {
      return upcoming;
    } else {
      return past;
    }
  }
  if (!start_date && end_date) {
    const end = parse(end_date, "yyyy.MM.dd", now);
    return isFuture(end) ? current : past;
  }
  if (start_date && !end_date) {
    const start = parse(start_date, "yyyy.MM.dd", now);
    return isPast(start) ? current : upcoming;
  }
  return past;
}
export function filterExhibitionCurrent(e: any): boolean {
  const now = new Date();
  const { start_date, end_date, date } = e;
  if (start_date && end_date) {
    const start = parse(start_date, "yyyy.MM.dd", now);
    const end = parse(end_date, "yyyy.MM.dd", now);
    if (isFuture(start)) {
      // upcoming event as current
      return true;
    }
    return isWithinInterval(now, {
      start,
      end,
    });
  }
  if (!start_date && end_date) {
    const end = parse(end_date, "yyyy.MM.dd", now);
    return isFuture(end);
  }
  if (start_date && !end_date) {
    const start = parse(start_date, "yyyy.MM.dd", now);
    return isPast(start);
  }
  if (date) {
    if (date.indexOf("/") > -1) {
      const [start, end] = date.split("-").map((a: string) => a.trim());
      if (end && end.length > 6) {
        return filterExhibitionCurrent({ start_date: start, end_date: end });
      } else {
        return isFuture(parse(start, "yyyy.MM.dd", now));
      }
    }
    return isFuture(parse(date, "yyyy.MM.dd", now));
  }
  return false;
}
export function filterExhibitionPast(e: any) {
  const now = new Date();
  const { start_date, end_date } = e;
  if (start_date && end_date) {
    const start = parse(start_date, "yyyy.MM.dd", now);
    const end = parse(end_date, "yyyy.MM.dd", now);
    if (isFuture(start)) {
      // upcoming event as current
      return false;
    }
    return !isWithinInterval(now, {
      start,
      end,
    });
  }
  if (!start_date && end_date) {
    return !isFuture(parse(end_date, "yyyy.MM.dd", now));
  }
  if (start_date && !end_date) {
    return !isPast(parse(start_date, "yyyy.MM.dd", now));
  }
  return false;
}
