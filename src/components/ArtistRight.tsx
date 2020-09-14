import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import PublicationWidget from "./PublicationWidget";
import ExhibitionWidget from "./ExhibitionWidget";
import EventWidget from "./EventWidget";
import BtnBack from "./BtnBack";
import useParams from "./useParams";
import { Grid } from "@material-ui/core";
import Linkify from "./Linkify";
import useItemIndex from "../utils/useItemIndex";
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
export default function ArtistRight() {
  const isDesktop = useDesktop();
  const { address } = useParams();
  const { homepage } = useItemIndex(address, "artist");
  return (
    <section className={isDesktop ? desktopContainer : mobileContainer}>
      {!isDesktop && (
        <Grid container justify="center">
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
      <PublicationWidget rel_publications={[]} dark />
      <ExhibitionWidget rel_exhibitions={[]} dark />
      <EventWidget rel_events={[]} dark />
      {!isDesktop && (
        <div
          className={css`
            align-items: center;
            justify-content: flex-end;
            display: flex;
            flex-direction: column;

            font-family: BauerGroteskOTW03;
            font-size: 17px;
            line-height: 1.47;
            color: #ffffff;
          `}
        >
          {!!homepage && (
            <Grid container justify="center">
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
          {!isDesktop && <BtnBack color="#fff" />}
        </div>
      )}
    </section>
  );
}
