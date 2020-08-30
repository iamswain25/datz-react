import { useGlobalState, LANG } from "../store/useGlobalState";

export default function useArtistItem(items: any[]) {
  const [lang] = useGlobalState(LANG);
  return items.map((item) => {
    const name = lang === "ko" ? item.name_ko : item.name_en;
    const bio = lang === "ko" ? item.bio_ko : item.bio_en;
    return {
      ...item,
      name,
      bio,
    };
  });
}
