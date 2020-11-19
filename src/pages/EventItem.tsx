import React from "react";
import EventItemLeft from "../components/EventItemLeft";
import EventItemRight from "../components/EventItemRight";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import ArtistHeader from "../components/ArtistHeader";
import { paddingH37 } from "../components/styles";
import useDoc from "../utils/useDoc";
import ArtistCloseBtn from "../components/ArtistCloseBtn";
import { Grid } from "@material-ui/core";
const desktopContainer = css`
  ${paddingH37}
  height: calc(100vh - 79px);
  position: relative;
  overflow: hidden;
`;
export default function EventItem() {
  const item = useDoc("event");
  const isDesktop = useDesktop(true);
  return (
    <>
      <ArtistHeader
        color="#707070"
        className={css`
          color: #707070;
          background-color: white;
        `}
      >
        <ArtistCloseBtn
          to="/event"
          title="< back to Events"
          className={css`
            color: #afafaf;
          `}
        />
      </ArtistHeader>
      {isDesktop ? (
        <section className={desktopContainer}>
          <Grid container spacing={3}>
            <Grid item sm={6}>
              <EventItemLeft images={item.images} />
            </Grid>
            <Grid item sm={6} container>
              <EventItemRight item={item} />
            </Grid>
          </Grid>
        </section>
      ) : (
        <EventItemRight
          item={item}
          children={<EventItemLeft images={item.images} />}
        />
      )}
    </>
  );
}
