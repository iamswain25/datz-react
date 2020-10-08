import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import useLang from "./useLang";
import Logo from "./Logo";
export default function BookProject({ item }: { item: any }) {
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
          Book Project
        </div>
        <div
          className={css`
            font-size: 16px;
            line-height: 1.19;
            color: #aaaaaa;
            margin-top: 8px;
          `}
        >
          Publication {">"}
        </div>
        <div
          className={css`
            font-size: 18px;
            line-height: 1.39;
          `}
        >
          <div className={classes.body}>{item?.text}</div>
          <div
            className={css`
              margin-top: 37px;
            `}
          >
            Contact
          </div>
          <a
            href="mailto:submission@datzpress.com"
            target="_blank"
            rel="noopener noreferrer"
            className={css`
              text-decoration: underline;
            `}
          >
            submission@datzpress.com
          </a>
        </div>
        <div
          className={css`
            font-size: 16px;
            line-height: 1.19;
            color: #aaaaaa;
            margin-top: ${isDesktop ? 100 : 23}px;
          `}
        >
          In collaboration with
        </div>
        <div>
          <Logo
            type="books"
            color="#5d5d5d"
            className={css`
              width: 80px;
              margin: 25px 0;
            `}
          />
        </div>
      </div>
      <div
        className={css`
          margin-bottom: 12px;
        `}
      >
        {item?.url && (
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={item?.url}
            className={css`
              font-size: 16px;
              line-height: 1.19;
              color: #aaaaaa;
              text-decoration: underline;
            `}
          >
            About Datz Books {">"}
          </a>
        )}
      </div>
    </section>
  );
}
