import { useGlobalState, LANG } from "../store/useGlobalState";
import { artists } from "../@type/artists";
export default function usePublications(items?: any[]) {
  const [lang] = useGlobalState(LANG);
  if (!items) {
    return null;
  }
  return items.map((item) => {
    const title = lang === "ko" ? item.title_ko : item.title_en;
    const artist = lang === "ko" ? item.artist_ko : item.artist_en;
    const quotes = lang === "ko" ? item.quotes_ko : item.quotes_en;
    const body = lang === "ko" ? item.body_ko : item.body_en;
    const notes = lang === "ko" ? item.notes_ko : item.notes_en;
    const preview_quote =
      lang === "ko" ? item.preview_quote_ko : item.preview_quote_en;
    const preview_body =
      lang === "ko" ? item.preview_body_ko : item.preview_body_en;
    const order_url = lang === "ko" ? item.order_url_ko : item.order_url_en;
    const artistAddress = artists.find((a) => a.id === item.rel_artists?.[0])
      ?.address;
    return {
      ...item,
      title,
      artist,
      quotes,
      body,
      notes,
      preview_quote,
      preview_body,
      order_url,
      artistAddress,
    };
  });
}
