import { useMemo } from "react";
import { useGlobalState, LANG } from "../store/useGlobalState";
import { publications } from "../@type/publications";
import { artists } from "../@type/artists";
import { events } from "../@type/events";
import { exhibitions } from "../@type/exhibitions";

export default function useExhibitionIndex(index: string | number) {
  const [lang] = useGlobalState(LANG);
  const item =
    exhibitions.find((e) => e.id === Number(index)) || exhibitions[0];
  const rel_publications = item.rel_publications as number[];
  const rel_events = item.rel_events as number[];
  const rel_artists = item.rel_artists as number[];
  const title = lang === "ko" ? item.title_ko : item.title_en;
  const body = lang === "ko" ? item.body_ko : item.body_en;
  const notes = lang === "ko" ? item.notes_ko : item.notes_en;
  const preview_body =
    lang === "ko" ? item.preview_body_ko : item.preview_body_en;
  const artistsObj = useMemo(
    () => artists.filter((a) => rel_artists.includes(a.id)),
    [rel_artists]
  );
  const eventObj = useMemo(
    () => events.filter((a) => rel_events.includes(a.id)),
    [rel_events]
  );
  const publicationsObj = useMemo(
    () => publications.filter((a) => rel_publications.includes(a.id)),
    [rel_publications]
  );
  return {
    ...item,
    title,
    body,
    notes,
    preview_body,
    artists: artistsObj,
    publications: publicationsObj,
    events: eventObj,
  };
}
