import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import { useParams } from "react-router-dom";
import Linkify from "./Linkify";
import useLang from "./useLang";
import useItemIndex from "../utils/useItemIndex";
const stickyContainer = css`
  border-top: 1px solid #ffffff;
  padding-top: 43px;
  // top: 79px;
  flex: 1;
  margin-right: 30px;
  font-family: BauerGroteskOTW03;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  margin-bottom: 36px;
`;
const mobileContainer = css`
  position: relative;
  color: #ffffff;
`;
export default function ArtistLeft() {
  const isDesktop = useDesktop();
  const [classes] = useLang("ArtistLeft");
  const { address } = useParams();
  const { homepage, bio } = useItemIndex(address, "artist");
  return (
    <div className={isDesktop ? stickyContainer : mobileContainer}>
      <section
        className={css`
          flex: 1;
          padding-left: 10px;
          padding-right: 10px;
        `}
      >
        <div
          className={css`
            font-family: BauerGroteskOTW03;
            font-size: 20px;
            line-height: 1.35;
            text-align: center;
            margin-bottom: 17px;
          `}
        >
          Biography
        </div>
        <div className={classes.bio}>{bio}</div>
      </section>
      {isDesktop && (
        <div
          className={css`
            align-items: center;
            justify-content: flex-end;
            display: flex;
            flex-direction: column;
            padding-top: 20px;
            font-family: BauerGroteskOTW03;
            font-size: 17px;
            line-height: 1.47;
            text-align: center;
            color: #ffffff;
          `}
        >
          {!!homepage && <Linkify>{homepage}</Linkify>}
          <hr
            className={css`
              margin-top: 24px;
              width: 100%;
              border-top: solid 1px #ffffff;
            `}
          />
        </div>
      )}
    </div>
  );
}
