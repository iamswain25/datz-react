import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import useLang from "./useLang";
import Logo from "./Logo";
import BtnShare from "./BtnShare";
const title = "Datz Artist Residency";
const hash = title?.toLowerCase().replace(/\s/g, "-");
export default function ResidencyRight({ item }: { item: any }) {
  const isDesktop = useDesktop();
  const [classes] = useLang("ArtistPage");

  return (
    <section
      className={css`
        font-family: datz-medium;
        text-align: center;
        display: flex;
        flex-direction: column;
        height: 100%;
        align-items: center;
        color: #5d5d5d;
        border-bottom: 1px solid #5d5d5d;
        position: relative;
        margin-top: ${isDesktop ? 0 : 10}px;
      `}
    >
      <p
        aria-hidden
        id={hash}
        className={css`
          position: absolute;
          top: -${isDesktop ? 107 : 79}px;
        `}
      />
      <BtnShare hash={hash} title={title} />
      <div
        className={css`
          font-size: 17px;
          line-height: 1.24;
          text-align: center;
          color: #707070;
          margin-top: 30px;
        `}
      >
        Datz Artist Projects
      </div>
      <hr
        className={css`
          width: 100%;
          border-top: solid 1px #707070;
          margin-top: 5px;
        `}
      />
      <section
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex: 1;
        `}
      >
        <div
          className={css`
            max-width: 600px;
            display: flex;
            flex-direction: column;
            margin-top: ${isDesktop ? 60 : 25}px;
          `}
        >
          <h1
            className={css`
              font-size: 25px;
              line-height: 1.08;
              text-align: center;
              color: #5d5d5d;
            `}
          >
            {title}
          </h1>
          <a
            href={item?.url?.[0]}
            className={css`
              margin-top: 15px;
              text-decoration: underline;
              font-size: 16px;
              line-height: 1.19;
              text-align: center;
              color: #aaaaaa;
            `}
          >
            Visit DMA &gt;
          </a>
          <div className={classes.body}>{item?.text}</div>
          <div
            className={css`
              font-size: 18px;
              line-height: 1.39;
              text-align: center;
              color: #5d5d5d;
              margin-top: 37px;
            `}
          >
            <div>Contact</div>
            <a
              href="mailto:museum@datzpress.com"
              target="_blank"
              rel="noopener noreferrer"
              className={css`
                text-decoration: underline;
              `}
            >
              museum@datzpress.com
            </a>
          </div>
        </div>
      </section>
      <div
        className={css`
          margin: ${isDesktop ? 100 : 54}px 0 ${isDesktop ? 32 : 50}px;
        `}
      >
        <Logo type="culture" color="#5d5d5d" />
      </div>
      <a
        href={item?.url?.[2]}
        target="_blank"
        rel="noopener noreferrer"
        className={css`
          font-size: 16px;
          line-height: 1.19;
          color: #aaaaaa;
          text-decoration: underline;
          margin-bottom: 12px;
        `}
      >
        About Datz Cultural Foundation &gt;
      </a>
    </section>
  );
}
