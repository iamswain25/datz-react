import React from "react";
import { css } from "emotion";
import DatzBooks from "../assets/svg/DatzBooks";
import useDesktop from "./useDesktop";
export default function BookProject() {
  const isDesktop = useDesktop();
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
          <div
            className={css`
              margin-top: 37px;
            `}
          >
            Creating books is done through collaboration of artists, planners,
            editors, designers, printing and bookmakers. Opportunities for
            publication with Datz Press are provided by the course of selection
            for applicants’ works. Different collaboration conditions apply to
            individual projects, such as books as another space in an exhibition
            or artist books as pure creations. However, due to the nature of
            book production studios, where a handful of workers work in the
            process of hand-made, only a limited number of projects are
            performed each year.
          </div>
          <div
            className={css`
              margin-top: 37px;
            `}
          >
            Contact
          </div>
          <a
            href="mailto:submission@datzpress.com"
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
        <div
          className={css`
            margin-top: 25px;
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
          About Datz Books {">"}
        </a>
      </div>
    </section>
  );
}
