import { useGlobalState, LANG } from "../store/useGlobalState";
export default function useItem(item: any = {}) {
  const [lang] = useGlobalState(LANG);
  const title = lang === "ko" ? item.title_ko : item.title_en;
  const name = lang === "ko" ? item.name_ko : item.name_en;
  const bio = lang === "ko" ? item.bio_ko : item.bio_en;
  const artist = lang === "ko" ? item.artist_ko : item.artist_en;
  const quotes = lang === "ko" ? item.quotes_ko : item.quotes_en;
  const body = lang === "ko" ? item.body_ko : item.body_en;
  const notes = lang === "ko" ? item.notes_ko : item.notes_en;
  const place = lang === "ko" ? item.place_ko : item.place_en;
  const preview_quote =
    lang === "ko" ? item.preview_quote_ko : item.preview_quote_en;
  const preview_body =
    lang === "ko" ? item.preview_body_ko : item.preview_body_en;
  const order_url = lang === "ko" ? item.order_url_ko : item.order_url_en;
  return {
    ...item,
    title,
    artist,
    quotes,
    body,
    name,
    bio,
    notes,
    preview_quote,
    preview_body,
    order_url,
    place,
  };
}