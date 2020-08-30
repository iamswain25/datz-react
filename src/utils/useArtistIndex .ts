import { useMemo } from "react";
import { useGlobalState, LANG } from "../store/useGlobalState";
import { publications } from "../@type/publications";
import { artists } from "../@type/artists";
import { events } from "../@type/events";
import { exhibitions } from "../@type/exhibitions";

export default function useArtistIndex(index: string | number) {
  const [lang] = useGlobalState(LANG);
  const item = artists.find((a) => a.id === Number(index)) || artists[0];
  const rel_publications = item.publications as number[];
  const rel_exhibitions = item.exhibitions as number[];
  const rel_events = item.events as number[];
  const name = lang === "ko" ? item.name_ko : item.name_en;
  const bio = lang === "ko" ? item.bio_ko : item.bio_en;
  const eventsObj = useMemo(
    () => events.filter((a) => rel_events.includes(a.id)),
    [rel_events]
  );
  const exhibitionsObj = useMemo(
    () => exhibitions.filter((a) => rel_exhibitions.includes(a.id)),
    [rel_exhibitions]
  );
  const publicationsObj = useMemo(
    () => publications.filter((a) => rel_publications.includes(a.id)),
    [rel_publications]
  );
  return {
    ...item,
    name,
    bio,
    events: eventsObj,
    publications: publicationsObj,
    exhibitions: exhibitionsObj,
  };
}
