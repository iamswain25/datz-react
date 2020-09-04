import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import PublicationWidget from "./PublicationWidget";
import ExhibitionWidget from "./ExhibitionWidget";
import EventWidget from "./EventWidget";
import BtnBack from "./BtnBack";
import { useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Linkify from "./Linkify";
import useItemIndex from "../utils/useItemIndex";
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
export default function PublicationItemPhotos() {
  const isDesktop = useDesktop();
  const { address } = useParams();
  const { publications, exhibitions, events, homepage } = useItemIndex(
    address,
    "artist"
  );
  return (
    <section className={isDesktop ? desktopContainer : mobileContainer}>
      <PublicationWidget publications={publications} dark />
      <ExhibitionWidget exhibitions={exhibitions} dark />
      <EventWidget events={events} dark />
      {!isDesktop && (
        <div
          className={css`
            align-items: center;
            justify-content: flex-end;
            display: flex;
            flex-direction: column;
            padding-top: 20px;
            padding-bottom: 20px;
            font-family: BauerGroteskOTW03;
            font-size: 17px;
            line-height: 1.47;
            color: #ffffff;
          `}
        >
          <Grid container>
            {!!homepage && (
              <Grid container>
                <span
                  className={css`
                    width: 70px;
                  `}
                >
                  Website
                </span>
                <Linkify children={homepage} />
              </Grid>
            )}
            {/* <Grid container>
              <span
                className={css`
                  width: 70px;
                `}
              >
                Email
              </span>
              <a
                href="mailto:marydaniel.hobson.gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                marydaniel.hobson.gmail.com
              </a>
            </Grid> */}
          </Grid>
          <hr
            className={css`
              margin-top: 24px;
              width: 100%;
              border-top: solid 1px #ffffff;
            `}
          />
          {!isDesktop && <BtnBack color="#fff" />}
        </div>
      )}
    </section>
  );
}
