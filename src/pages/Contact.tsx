import React from "react";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import AboutHeader from "../components/AboutHeader";
import { marginH55, flexcolumncenter } from "../components/styles";

const bgContainer = css`
  background-color: #afafaf;
  font-family: BauerGroteskOTW03;
  text-align: center;
  color: #ffffff;
  height: 100vh;
`;
const h1Style = css`
  font-size: 17px;
  line-height: 1.24;
  padding-bottom: 6px;
  margin-bottom: 12px;
  border-bottom: 1px solid #fff;
  width: 100%;
`;
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
  return (
    <>
      <div className={bgContainer}>
        <AboutHeader fixed />
        <div
          className={css`
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(7, 1fr);
            column-gap: 62px;
            height: ${isDesktop ? "calc(100vh - 79px - 37px)" : "auto"};
            min-height: 600px;
            border-bottom: 1px solid #fff;
            padding-bottom: 20px;
            ${marginH55}
          `}
        >
          <div
            className={css`
              grid-column: 1/3;
              grid-row: 1;
              ${flexcolumncenter}
            `}
          >
            <h1 className={h1Style}>Enquiry</h1>
            <a
              href="mailto:datzpress@datzpress.com"
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
            <p
              className={css`
                line-height: 1.39;
                font-size: 18px;
                white-space: break-spaces;
              `}
            >
              {`Phone
+82 2 447 2581
-
Email
Datz Press      datzpress@datzpress.com
Datz Books      books@datzpress.com
D’Ark Room      darkroom@datzpress.com
DMA      museum@datzpress.com`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
