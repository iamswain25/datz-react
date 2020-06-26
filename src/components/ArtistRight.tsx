import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import PublicationWidget from "./PublicationWidget";
import ExhibitionWidget from "./ExhibitionWidget";
import EventWidget from "./EventWidget";
import BtnBack from "./BtnBack";
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
  return (
    <section className={isDesktop ? desktopContainer : mobileContainer}>
      <PublicationWidget dark />
      <ExhibitionWidget dark />
      <EventWidget dark />
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
          <div
            className={css`
              display: grid;
              align-self: flex-start;
              grid-template-columns: 70px auto;
            `}
          >
            <div>Website</div>
            <a
              href="https://amandamarchand.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              amandamarchand.com
            </a>
            <div>Email</div>
            <a
              href="mailto:marydaniel.hobson.gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              marydaniel.hobson.gmail.com
            </a>
          </div>

          <hr
            className={css`
              margin-top: 24px;
              width: 100%;
              border-top: solid 1px #ffffff;
            `}
          />
          {!isDesktop && <BtnBack dark />}
        </div>
      )}
    </section>
  );
}
