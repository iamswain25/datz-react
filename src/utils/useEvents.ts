import { useGlobalState, LANG } from "../store/useGlobalState";
import { Event } from "../@type";
export default function useEvents(items?: Event[]) {
  const [lang] = useGlobalState(LANG);
  if (!items) {
    return undefined;
  }
  return items.map((item) => {
    const place = lang === "ko" ? item.place_ko : item.place_en;
    const title = lang === "ko" ? item.title_ko : item.title_en;
    const body = lang === "ko" ? item.body_ko : item.body_en;
    return {
      ...item,
      place,
      title,
      body,
    };
  });
}
