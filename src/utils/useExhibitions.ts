import { useGlobalState, LANG } from "../store/useGlobalState";

export default function useExhibitions(items: any[]) {
  const [lang] = useGlobalState(LANG);
  return items.map((item) => {
    const title = lang === "ko" ? item.title_ko : item.title_en;
    const quotes = lang === "ko" ? item.quotes_ko : item.quotes_en;
    const body = lang === "ko" ? item.body_ko : item.body_en;
    const notes = lang === "ko" ? item.notes_ko : item.notes_en;
    const preview_quote =
      lang === "ko" ? item.preview_quote_ko : item.preview_quote_en;
    const preview_body =
      lang === "ko" ? item.preview_body_ko : item.preview_body_en;
    return {
      ...item,
      title,
      quotes,
      body,
      notes,
      preview_quote,
      preview_body,
    };
  });
}
