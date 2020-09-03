import React from "react";
import { css } from "emotion";
import DatzBooks from "../assets/svg/DatzBooks";
import useDesktop from "./useDesktop";
import useLang from "./useLang";
export default function Residence() {
  const isDesktop = useDesktop();
  const [classes] = useLang("ArtistPage");
  return (
    <section
      className={css`
        font-family: BauerGroteskOTW03;
        text-align: center;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        align-items: center;
        color: #5d5d5d;
        border-bottom: 1px solid #5d5d5d;
      `}
    >
      <div
        className={css`
          max-width: 600px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          ${isDesktop ? "" : "margin-top: 25px"}
        `}
      >
        <div
          className={css`
            font-size: 23px;
            line-height: 1.17;
          `}
        >
          <a
            href="residency"
            className={css`
              text-decoration: underline;
            `}
          >
            Datz Artist Residency {">"}
          </a>
        </div>
        <div className={classes.body}>
          Datz Artist Residency, which can breathe close to nature, is the
          cradle of creation that can focus on the energy for new creations or
          carry out location-specific projects, allowing artists to participate
          in publications or exhibitions through collaboration with the Datz
          Press. In particular, the residency program, which began through
          continuous international exchanges in photography and publishing, is
          open to all domestic and foreign artists regardless of nationality,
          religion, gender, or academic background.
        </div>
        <div
          className={css`
            font-size: 16px;
            line-height: 1.19;
            color: #aaaaaa;
            margin-top: 30px;
          `}
        >
          <a
            href="apply"
            className={css`
              margin-top: 37px;
              text-decoration: underline;
            `}
          >
            Apply {">"}
          </a>
        </div>
        <div
          className={css`
            margin-top: ${isDesktop ? 100 : 23}px;
          `}
        >
          <DatzBooks color="#5d5d5d" />
        </div>
      </div>
      <div
        className={css`
          margin-bottom: 12px;
        `}
      >
        <a
          href="datz"
          className={css`
            font-size: 16px;
            line-height: 1.19;
            color: #aaaaaa;
            text-decoration: underline;
          `}
        >
          About Datz Cultural Foundation {">"}
        </a>
      </div>
    </section>
  );
}
