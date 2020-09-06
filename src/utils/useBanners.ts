import { useGlobalState, LANG } from "../store/useGlobalState";
import * as types from "../@type/banners";

export default function useBanners(
  page: "home" | "leftSide" | "about" | "artists" | "publications" = "home",
  type = "New Books"
) {
  const [lang] = useGlobalState(LANG);
  const en = lang !== "ko";
  const items = (types[page] as any[]).filter((e) => e.type === type);
  return items.map((item) => {
    const title = (en ? item.title_en : item.title_ko) ?? item.title_en;
    const subtitle = en ? item.subtitle_en : item.subtitle_ko;
    const text = en ? item.text_en : item.text_ko;
    const artist = en ? item.artist_en : item.artist_ko;
    return {
      ...item,
      title,
      subtitle,
      text,
      artist,
    };
  });
}
