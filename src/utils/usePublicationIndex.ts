import { useMemo } from "react";
import { useGlobalState, LANG } from "../store/useGlobalState";
import { publications } from "../@type/publications";
import { artists } from "../@type/arists";
import { exhibitions } from "../@type/exhibitions";

export default function usePublicationIndex(index: string | number) {
  const [lang] = useGlobalState(LANG);
  const item = publications[Number(index) - 1];
  const rel_publications = item.rel_publications as number[];
  const rel_exhibition = item.rel_exhibition as number[];
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
  const artistsObj = useMemo(
    () => artists.filter((a) => item.rel_artists.includes(a.id)),
    [item.rel_artists]
  );
  const exhibitionsObj = useMemo(
    () => exhibitions.filter((a) => rel_exhibition.includes(a.id)),
    [rel_exhibition]
  );
  const publicationsObj = useMemo(
    () => publications.filter((a) => rel_publications.includes(a.id)),
    [rel_publications]
  );
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
    artists: artistsObj,
    publications: publicationsObj,
    exhibitions: exhibitionsObj,
  };
}
