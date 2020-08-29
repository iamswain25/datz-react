import React from "react";
import p1 from "../assets/images/publication/p1.png";
import p2 from "../assets/images/publication/p2.png";
import p3 from "../assets/images/publication/p3.png";
import p4 from "../assets/images/publication/p4.png";
import p5 from "../assets/images/publication/p5.png";
import p6 from "../assets/images/publication/p6.png";
import { Link } from "react-router-dom";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import { publications } from "../@type/publications";
import { useGlobalState, LANG } from "../store/useGlobalState";
const subCategories = [["all"], ["Book"], ["Artist book"], ["Magazine"]];
export default function PublicationList() {
  const [selected, setSelected] = React.useState("all");
  const [lang] = useGlobalState(LANG);
  const isDesktop = useDesktop();
  return (
    <>
      <div
        className={css`
          margin-top: ${isDesktop ? 0 : 29}px;
          border-top: ${isDesktop ? 0 : 1}px solid #afafaf;
          margin-left: ${isDesktop ? 27 : 10}px;
          margin-right: ${isDesktop ? 0 : 10}px;
          display: flex;
          flex: 1;
          flex-direction: column;
          height: 100%;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: row;
            min-height: 77px;
            justify-content: center;
            align-items: center;
            font-family: BauerGroteskOTW03;
            font-size: 16px;
            line-height: 1.19;
            color: #cccccc;
          `}
        >
          {subCategories.map(([label], i) => {
            let selectedCss = null;
            if (selected === label) {
              selectedCss = css`
                text-decoration: underline;
                color: #383838;
              `;
            }
            function selectHandler() {
              setSelected(label);
            }
            return (
              <div
                key={i}
                onClick={selectHandler}
                className={css`
                  padding-left: 18px;
                  padding-right: 18px;
                  cursor: pointer;
                  ${selectedCss}
                `}
              >
                {label}
              </div>
            );
          })}
        </div>
        <div
          className={css`
            margin-left: ${isDesktop ? 73 : 0}px;
            margin-right: ${isDesktop ? 73 : 0}px;
            display: flex;
            flex-direction: column;
          `}
        >
          <p
            className={css`
              font-family: ArnoPro-Display;
              font-size: 18px;
              line-height: 1.5;
              letter-spacing: 0.36px;
              text-align: left;
              color: #4b4b4b;
            `}
          >
            Datz specializes in planning and publishing books of artists’ works.
            We looks to preserve artists’ works through publication, and with
            its books it shares their art. As a rule, all work presented at Datz
            Museum are recorded and preserved in book form.
          </p>
          <div
            className={css`
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
              grid-gap: 36px;
              flex: 1;
              justify-content: center;
              font-family: BauerGroteskOTW03;
              margin-bottom: 40px;
            `}
          >
            {publications.map((item, i) => {
              return (
                <Link
                  to={`publication/${item.id}`}
                  key={i}
                  className={css`
                    padding-left: 18px;
                    padding-right: 18px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    color: #707070;
                    text-align: center;
                  `}
                >
                  <img src={item.images.split(`\n`)[0] || p1} alt="title" />
                  <span
                    className={css`
                      font-size: 19px;
                      line-height: 1.21;
                    `}
                  >
                    {lang === "ko" ? item.title_ko : item.title_en}
                  </span>
                  <span
                    className={css`
                      margin-top: 4px;
                      font-size: 17px;
                      line-height: 1.35;
                    `}
                  >
                    {lang === "ko" ? item.artist_ko : item.artist_en}
                  </span>
                </Link>
              );
            })}
          </div>
          <button
            className={css`
              height: 38px;
              border-top: solid 1px #707070;
              padding-bottom: 9px;
              padding-top: 9px;
              text-align: center;
              font-family: BauerGroteskOTW03;
              font-size: 14px;
              line-height: 1.21;
              color: #707070;
            `}
          >
            view more {">"}
          </button>
        </div>
      </div>
    </>
  );
}
