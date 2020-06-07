import React from "react";
import PublicationStickyTop from "../components/PublicationStickyTop";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import p5 from "../assets/images/p5.png";
import p6 from "../assets/images/p6.png";

import { css } from "emotion";
import useDesktop from "../components/useDesktop";
const subCategories = [["all"], ["Book"], ["Artist book"], ["Magazine"]];
const products = [
  [p1, "Offerings [SE]", "Mary Daniel Hobson"],
  [p2, "Offerings", "Mary Daniel Hobson"],
  [p3, "TYPE LIBRARY", "Hyunmee Kim"],
  [p4, "Nothing Will Ever be the Same Again [SE]", "Amanda Marchand"],
  [p5, "NOTES", "Alyssa Minahan"],
  [p6, "Flowing", "Wayne Levin"],
];
const desktopContainer = css`
  display: flex;
  flex-direction: row;
  padding-left: 37px;
  padding-right: 37px;
`;
const mobileContainer = css`
  display: flex;
  flex-direction: column;
  padding-left: 17px;
  padding-right: 17px;
`;
export default function Publication() {
  const [selected, setSelected] = React.useState("all");
  const isDeskTop = useDesktop();
  return (
    <section className={isDeskTop ? desktopContainer : mobileContainer}>
      <PublicationStickyTop />
      <div
        className={css`
          margin-top: ${isDeskTop ? 0 : 29}px;
          border-top: ${isDeskTop ? 0 : 1}px solid #afafaf;
          display: flex;
          flex: 1;
          flex-direction: column;
        `}
      >
        <div
          className={css`
            margin-left: ${isDeskTop ? 27 : 10}px;
            margin-right: ${isDeskTop ? 0 : 10}px;
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
        <p
          className={css`
            margin-left: ${isDeskTop ? 100 : 10}px;
            margin-right: ${isDeskTop ? 0 : 10}px;
            font-family: ArnoPro-Display;
            font-size: 18px;
            line-height: 1.5;
            letter-spacing: 0.36px;
            text-align: left;
            color: #4b4b4b;
          `}
        >
          Datz specializes in planning and publishing books of artists’ works.
          We looks to preserve artists’ works through publication, and with its
          books it shares their art. As a rule, all work presented at Datz
          Museum are recorded and preserved in book form.
        </p>
        <div
          className={css`
            margin-left: ${isDeskTop ? 100 : 10}px;
            margin-right: ${isDeskTop ? 0 : 10}px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            flex: 1;
            justify-content: center;
            font-family: BauerGroteskOTW03;
          `}
        >
          {products.map(([src, title, artist], i) => {
            return (
              <div
                key={i}
                className={css`
                  padding-left: 18px;
                  padding-right: 18px;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  color: #707070;
                `}
              >
                <img src={src} alt="title" />
                <span
                  className={css`
                    font-size: 19px;
                    line-height: 1.21;
                  `}
                >
                  {title}
                </span>
                <span
                  className={css`
                    font-size: 17px;
                    line-height: 1.35;
                  `}
                >
                  {artist}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
