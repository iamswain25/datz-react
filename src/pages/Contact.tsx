import React from "react";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import AboutHeader from "../components/AboutHeader";
import { marginH55, flexcolumncenter, marginH27 } from "../components/styles";
import BtnTop from "../components/BtnTop";

const aStyle = css`
  text-decoration: underline;
  display: block;
  line-height: 1.39;
  font-size: 18px;
`;
const collectionList = [
  ["Stanford Libraries", "/"],
  ["Amon Carter Museum ", "/"],
  ["ICP Library ", "/"],
  ["Special Collections, John M. Flaxman Library (SAIC)  ", "/"],
  ["SFAI Library   ", "/"],
  ["New York Public Library", "/"],
  ["Duke University Libraries", "/"],
];
function mapLinks(top: any, i: number) {
  if (typeof top === "string") {
    return <div key={i}>{top}</div>;
  }
  if (top instanceof Array) {
    const [label, link] = top;
    return (
      <a href={link} key={i} className={aStyle}>
        {label}
      </a>
    );
  } else {
    return <br key={i} />;
  }
}
export default function Contact() {
  const isDesktop = useDesktop();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const h1Style = React.useMemo(
    () => css`
      font-family: BauerGroteskOTW03;
      font-size: 17px;
      line-height: 1.24;
      padding-bottom: 6px;
      margin-bottom: 12px;
      margin-top: ${isDesktop ? 0 : 74}px;
      border-bottom: 1px solid #fff;
      width: 100%;
    `,
    [isDesktop]
  );
  return (
    <>
      <div
        className={css`
          background-color: #afafaf;
          font-family: BauerGroteskOTW03-Regular;
          text-align: center;
          color: #ffffff;
          height: ${isDesktop ? "100vh" : "auto"};
        `}
      >
        <AboutHeader sticky />
        <div
          className={css`
            display: ${isDesktop ? "grid" : "flex"};
            flex-direction: column;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(7, 1fr);
            column-gap: 62px;
            height: ${isDesktop ? "calc(100vh - 79px - 37px)" : "auto"};
            min-height: 600px;
            border-bottom: 1px solid #fff;
            padding-bottom: 20px;
            ${isDesktop ? marginH55 : marginH27}
          `}
        >
          <div
            className={css`
              grid-column: 1/3;
              grid-row: 1;
              ${flexcolumncenter}
            `}
          >
            <h1
              className={css`
                ${h1Style}
                margin-top: 35px;
              `}
            >
              Enquiry
            </h1>
            <a
              href="mailto:datzpress@datzpress.com"
              target="_blank"
              rel="noopener noreferrer"
              className={css`
                font-size: 16px;
                line-height: 1.19;
              `}
            >
              datzpress@datzpress.com
            </a>
          </div>
          <div
            className={css`
              grid-column: 1;
              grid-row: 2/7;
            `}
          >
            <h1 className={h1Style}>STOCKLIST</h1>
            <div
              className={css`
                grid-template-columns: repeat(2, 1fr);
                display: grid;
                font-size: 18px;
                line-height: 1.39;
              `}
            >
              <div>
                {[
                  "Seoul, Korea",
                  ["MMCA Art Zone", "/"],
                  ["Your-mind", "/"],
                  ["The Reference", "/"],
                  ["Photobooks Gorae", "/"],
                  null,
                  "New York, USA",
                  ["Printed Matter Inc.", "/"],
                  ["Clic Gallery", "/"],
                  null,
                  "New Mexico, USA",
                  ["Photo-eye Bookstore", "/"],
                ].map(mapLinks)}
              </div>
              <div>
                {[
                  "San Francisco, USA",
                  ["Smith Anderson Gallery", "/"],
                  ["Moe’s Books", "/"],
                  null,
                  "Hawaii, USA, USA",
                  ["Honolulu Museum of Art", "/"],
                  ["Tree House", "/"],
                  ["Minny Lee Fine Art. LLC", "/"],
                  null,
                  "Massachusetts, USA",
                  ["Concord Art Center", "/"],
                  null,
                  "Taipei City, Taiwan",
                  ["Artland Bookstore", "/"],
                ].map(mapLinks)}
              </div>
            </div>
          </div>
          <div
            className={css`
              grid-column: 1;
              grid-row: 7;
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
            `}
          >
            <h1 className={h1Style}>CATALOG</h1>
            <a href="/publication" className={aStyle}>
              Publication 2019
            </a>
          </div>
          <div
            className={css`
              grid-column: 2;
              grid-row: 2/5;
            `}
          >
            <h1 className={h1Style}>COLLECTIONS</h1>
            {collectionList.map(mapLinks)}
          </div>
          <div
            className={css`
              grid-column: 2;
              grid-row: 5/8;
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
            `}
          >
            <h1 className={h1Style}>CONTACT</h1>
            <div
              className={css`
                line-height: 1.39;
                font-size: 18px;
                white-space: break-spaces;
              `}
            >
              <div>Phone</div>
              <div>
                <a href="tel:+82 2 447 2581">+82 2 447 2581</a>
              </div>
              <div>-</div>
              <div>Email</div>
              <div>
                <span
                  className={css`
                    margin-right: 16px;
                  `}
                >
                  Datz Press
                </span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="datzpress@datzpress.com"
                >
                  datzpress@datzpress.com
                </a>
              </div>
              <div>
                <span
                  className={css`
                    margin-right: 16px;
                  `}
                >
                  Datz Books
                </span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="books@datzpress.com"
                >
                  books@datzpress.com
                </a>
              </div>
              <div>
                <span
                  className={css`
                    margin-right: 16px;
                  `}
                >
                  D’Ark Room
                </span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="darkroom@datzpress.com"
                >
                  darkroom@datzpress.com
                </a>
              </div>
              <div>
                <span
                  className={css`
                    margin-right: 16px;
                  `}
                >
                  DMA
                </span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="darkroom@datzpress.com"
                >
                  museum@datzpress.com
                </a>
              </div>
            </div>
          </div>
        </div>
        {!isDesktop && <BtnTop color="white" />}
      </div>
    </>
  );
}
