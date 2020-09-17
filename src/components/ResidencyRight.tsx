import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import useLang from "./useLang";
import Logo from "./Logo";
export default function ResidencyRight({ item }: { item: any }) {
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
          display: flex;
          flex-direction: column;
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
            href={item?.url?.[0]}
            className={css`
              text-decoration: underline;
            `}
          >
            Datz Artist Residency {">"}
          </a>
        </div>
        <div className={classes.body}>{item?.text}</div>
        <div
          className={css`
            font-size: 16px;
            line-height: 1.19;
            color: #aaaaaa;
            margin-top: 30px;
          `}
        >
          <a
            href={item?.url?.[1]}
            className={css`
              margin-top: 37px;
              text-decoration: underline;
            `}
          >
            Apply {">"}
          </a>
        </div>
      </div>
      <div
        className={css`
          margin-bottom: 12px;
        `}
      >
        <div>
          <Logo
            type="culture"
            color="#5d5d5d"
            className={css`
              margin: ${isDesktop ? 100 : 54}px 0 ${isDesktop ? 32 : 50}px;
              width: 98px;
            `}
          />
        </div>
        <a
          href={item?.url?.[2]}
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
