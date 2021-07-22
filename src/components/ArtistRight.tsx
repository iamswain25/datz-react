import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import PublicationWidget from "./PublicationWidget";
import ExhibitionWidget from "./ExhibitionWidget";
import EventWidget from "./EventWidget";
import { Grid } from "@material-ui/core";
import Linkify from "./Linkify";
import Divider from "./Divider";
const mobileContainer = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 48px;
`;
const desktopContainer = css`
  width: calc(50% - 30px);
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  border-top: 1px solid #ffffff;
  margin-bottom: 36px;
`;
export default function ArtistRight({ item }: { item: any }) {
  const isDesktop = useDesktop();
  const { homepage } = item;
  return (
    <section className={isDesktop ? desktopContainer : mobileContainer}>
      {!isDesktop && (
        <Grid container justifyContent="center">
          <div
            className={css`
              font-size: 17px;
              line-height: 1.24;
            `}
          >
            Related
          </div>
          <Divider
            color="#fff"
            className={css`
              margin-top: 8px;
              width: 100%;
            `}
          />
        </Grid>
      )}
      <PublicationWidget rel_publications={item.rel_publications} dark />
      <ExhibitionWidget rel_exhibitions={item.rel_exhibitions} dark />
      <EventWidget rel_events={item.rel_events} dark />
      {!isDesktop && (
        <div
          className={css`
            align-items: center;
            justify-content: flex-end;
            display: flex;
            flex-direction: column;
            font-family: datz-medium;
            font-size: 17px;
            line-height: 1.47;
            color: #ffffff;
            margin-bottom: 37px;
          `}
        >
          {!!homepage && (
            <Grid container justifyContent="center">
              <Linkify>
                <div
                  className={css`
                    padding: 30px 0;
                  `}
                >
                  {homepage}
                </div>
              </Linkify>
              <hr
                className={css`
                  width: 100%;
                  border-top: solid 1px #ffffff;
                `}
              />
            </Grid>
          )}
        </div>
      )}
    </section>
  );
}
