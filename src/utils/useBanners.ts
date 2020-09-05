import { useGlobalState, LANG } from "../store/useGlobalState";
import * as types from "../@type/banners";

export default function useBanners(
  page: "home" | "leftSide" = "home",
  type = "New Books"
) {
  const [lang] = useGlobalState(LANG);
  const en = lang !== "ko";
  const items = (types[page] as any[]).filter((e) => e.type === type);
  return items.map((item) => {
    const title = en ? item.title_en : item.title_ko;
    const subtitle = en ? item.subtitle_en : item.subtitle_ko;
    return {
      ...item,
      title,
      subtitle,
    };
  });
}
