import { useGlobalState, LANG } from "../store/useGlobalState";
import { news } from "../@type/news";

export default function useNewsIndex(index: number | string) {
  const [lang] = useGlobalState(LANG);
  const item = news.find((e) => e.id === Number(index)) || news[0];
  const place = lang === "ko" ? item.place_ko : item.place_en;
  const title = lang === "ko" ? item.title_ko : item.title_en;
  const body = lang === "ko" ? item.body_ko : item.body_en;
  return {
    ...item,
    place,
    title,
    body,
  };
}
