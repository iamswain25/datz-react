import { useGlobalLang } from "../store/useGlobalState";

export default function useArtists(items?: any[]) {
  const [lang] = useGlobalLang();
  if (!items) {
    return undefined;
  }
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
