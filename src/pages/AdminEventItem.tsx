import React from "react";
import EventItemLeft from "../components/EventItemLeft";
import { css } from "emotion";
import ArtistHeader from "../components/ArtistHeader";
import { flexrow, paddingH37 } from "../components/styles";
import useDoc from "../utils/useDoc";
import AdminEventItemRight from "../components/AdminEventItemRight ";
const desktopContainer = css`
  ${flexrow}
  ${paddingH37}
`;
export default function AdminEventItem() {
  const item = useDoc("event");
  return (
    <>
      <ArtistHeader sticky isWhite closeTo="/event" />
      <section className={desktopContainer}>
        <EventItemLeft images={item.images} />
        <AdminEventItemRight item={item} />
      </section>
    </>
  );
}
