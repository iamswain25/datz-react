import { useGlobalState, LANG } from "../store/useGlobalState";

export default function useNews(items: any[]) {
  const [lang] = useGlobalState(LANG);
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
