import { useGlobalLang } from "../store/useGlobalState";

export default function useItems(items?: any[]) {
  const [lang] = useGlobalLang();
  if (!items) {
    return undefined;
  }
  return items.map((item) => {
    const name = lang === "ko" ? item.name_ko : item.name_en;
    const bio = lang === "ko" ? item.bio_ko : item.bio_en;
    const title =
      (lang === "ko" ? item.title_ko : item.title_en) ?? item.title_en;
    const text = lang === "ko" ? item.text_ko : item.text_en;
    const artist = lang === "ko" ? item.artist_ko : item.artist_en;
    const preview = lang === "ko" ? item.preview_ko : item.preview_en;
    const url = lang === "ko" ? item.url_ko : item.url_en;
    const link_title = lang === "ko" ? item.link_title_ko : item.link_title_en;
    return {
      ...item,
      name,
      bio,
      title,
      text,
      artist,
      preview,
      url,
      link_title,
    };
  });
}
