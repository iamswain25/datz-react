import { useMemo } from "react";
import { useGlobalState, LANG } from "../store/useGlobalState";
import { publications } from "../@type/publications";
import { artists } from "../@type/artists";
import { events } from "../@type/events";
import { news } from "../@type/news";
import { exhibitions } from "../@type/exhibitions";
const types: any = { publications, artists, events, exhibitions, news };
export default function useItemIndex(
  address: string | number,
  type:
    | "publication"
    | "artist"
    | "event"
    | "exhibition"
    | "new" = "publication"
) {
  const [lang] = useGlobalState(LANG);
  const items = types[type + "s"];

  const item =
    items.find((e: any) =>
      typeof address === "string" ? e.address === address : e.id === address
    ) || types[type][0];
  const rel_publications = item.rel_publications as number[];
  const rel_exhibitions = item.rel_exhibitions as number[];
  const rel_events = item.rel_events as number[];
  const rel_artists = item.rel_artists as number[];
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
  const artistsObj = useMemo(
    () => artists.filter((a) => rel_artists?.includes(a.id)),
    [rel_artists]
  );
  const eventObj = useMemo(
    () => events.filter((a) => rel_events?.includes(a.id)),
    [rel_events]
  );
  const exhibitionsObj = useMemo(
    () => exhibitions.filter((a) => rel_exhibitions?.includes(a.id)),
    [rel_exhibitions]
  );
  const publicationsObj = useMemo(
    () => publications.filter((a) => rel_publications?.includes(a.id)),
    [rel_publications]
  );
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
    artists: artistsObj,
    publications: publicationsObj,
    exhibitions: exhibitionsObj,
    events: eventObj,
  };
}
