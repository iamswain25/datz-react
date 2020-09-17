import React from "react";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import { Link, NavLink, useHistory } from "react-router-dom";
import Datz from "../assets/svg/Datz";
import { useGlobalState, LANG } from "../store/useGlobalState";
import { HamburgerButton } from "react-hamburger-button";
import Close from "../assets/svg/Close";
import useParams from "../components/useParams";
import useBtnBack from "../components/useBtnBack";
import algoliasearch from "algoliasearch";
import { RequestOptions } from "@algolia/transporter";
import useLang from "../components/useLang";
import BtnTop from "../components/BtnTop";
const FILTERS: { [key: string]: string } = {
  all: "All",
  artist: "Artist",
  publication: "Publication",
  exhibition: "Exhibition",
  event: "Event",
};
const headerText = css`
  font-family: BauerGroteskOTW03;
  font-size: 16px;
  text-decoration: none;
  line-height: 1.19;
  text-align: center;
  color: inherit;
  :hover {
    text-decoration: underline;
  }
`;
const client = algoliasearch("DIKGD6O10A", "85dcb1bdb7312f2719d1c098d2f968c2");
const index = client.initIndex("datzpress");
export default function Search() {
  const isDesktop = useDesktop(true);
  const history = useHistory();
  const [, en] = useLang();
  const { filter = "all", query } = useParams();
  const [text, setText] = React.useState(query ?? "");
  const [result, setResult] = React.useState<undefined | any>(undefined);
  const [lang, setLang] = useGlobalState(LANG);
  const [isOpen, setOpen] = React.useState(false);
  const goBack = useBtnBack();
  function textHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const t = e.currentTarget.value;
    setText(t);
    history.replace(`/search/${filter}/${t}`);
  }
  function openHandler() {
    setOpen(!isOpen);
  }
  React.useEffect(() => {
    const options: RequestOptions = {
      hitsPerPage: 200,
      facetFilters: [`collection:${filter}`],
    };
    if (filter === "all") {
      options.facetFilters = undefined;
      if (!query) return;
    }
    index.search(query, options).then(setResult);
  }, [query, filter, history]);
  return (
    <main>
      <section
        className={css`
          position: sticky;
          top: 0;
          height: ${isDesktop ? 106 : 180}px;
          background-color: #afafaf;
        `}
      >
        <div
          className={css`
            display: flex;
            align-items: center;
            height: 79px;
            max-width: 1920px;
            padding: 0 ${isDesktop ? 37 : 17}px;
            margin: 0 auto;
          `}
        >
          <NavLink
            className={css`
              display: flex;
              align-items: center;
              ${headerText}
              padding-left: ${isDesktop ? 16 : 5}px;
              padding-right: ${isDesktop ? 32 : 5}px;
              margin-bottom: 8px;
            `}
            to="/"
          >
            <Datz color="white" />
          </NavLink>
          <div
            className={css`
              display: flex;
              align-items: center;
              flex: 1;
              justify-content: flex-end;
              font-size: 16px;
            `}
          >
            <button
              className={css`
                ${headerText};
                margin: 0 10px;
                color: ${lang === "en" ? "white" : "#cccccc"};
              `}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <div
              className={css`
                width: 0;
                height: 12px;
                border-left: solid 1px white;
              `}
            />
            <button
              onClick={() => setLang("ko")}
              className={css`
                ${headerText};
                margin: 0 10px;
                color: ${lang === "ko" ? "white" : "#cccccc"};
              `}
            >
              KR
            </button>
            {!isDesktop && (
              <>
                <button
                  onClick={goBack}
                  className={css`
                    display: flex;
                    align-items: center;
                    margin-right: 20px;
                  `}
                >
                  <Close
                    color="#fff"
                    className={css`
                      width: 15px;
                      height: 15px;
                    `}
                  />
                </button>
                <HamburgerButton
                  open={isOpen}
                  onClick={openHandler}
                  width={18}
                  height={15}
                  strokeWidth={1}
                  color="white"
                  animationDuration={0.5}
                />
              </>
            )}
          </div>
        </div>
        <div
          className={css`
            position: ${isDesktop ? "absolute" : "relative"};
            padding: 0 ${isDesktop ? 0 : 17}px;
            left: ${isDesktop ? 148 : 0}px;
            width: calc(100% - ${isDesktop ? 296 : 0}px);
            top: ${isDesktop ? "14px" : "unset"};
          `}
        >
          <div
            className={css`
              border-bottom: 1px solid white;
              height: ${isDesktop ? 50 : 40}px;
              display: flex;
              align-items: center;
              padding: 0 10px;
            `}
          >
            <span className={css``}>Search</span>
            <input
              type="text"
              value={text}
              autoFocus
              onChange={textHandler}
              className={css`
                flex: 1;
                font-size: 16px;
                line-height: 1.19;
                margin-left: 14px;
                margin-right: 8px;
              `}
            />
          </div>
        </div>

        <section
          className={css`
            margin: ${isDesktop ? 0 : 20}px ${isDesktop ? 55 : 17}px 0;
            display: flex;
            align-items: center;
          `}
        >
          {isDesktop && (
            <>
              <button
                onClick={goBack}
                className={css`
                  height: 13px;
                  font-size: 10px;
                  line-height: 1.3;
                  text-align: left;
                  color: #fff;
                  margin-right: 45px;
                  display: flex;
                  align-items: center;
                `}
              >
                <Close
                  color="#fff"
                  className={css`
                    margin-right: 8px;
                  `}
                />
                <span>CLOSE</span>
              </button>
              <div
                className={css`
                  font-size: 12px;
                  line-height: 1.17;
                  color: #cccccc;
                `}
              >
                Showing {result?.nbHits || 0} results
              </div>
            </>
          )}
          <div
            className={css`
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              max-width: 350px;
              color: #cccccc;
              font-size: 16px;
              line-height: 1.19;
              flex: 1;
              position: ${isDesktop ? "absolute" : "relative"};
              left: 50%;
              transform: translateX(-50%);
            `}
          >
            {Object.keys(FILTERS).map((f, i) => {
              const isFirst = i === 0;
              const isLast = Object.keys(FILTERS).length - 1 === i;
              let marginLeft = isFirst ? 0 : 11;
              let marginRight = isFirst ? 36 : isLast ? 0 : 11;
              if (!isDesktop) {
                marginLeft = isFirst ? 0 : 5;
                marginRight = isFirst ? 9 : isLast ? 0 : 5;
              }
              return (
                <NavLink
                  key={f}
                  to={`/search/${f}/${text}`}
                  replace
                  activeClassName={css`
                    color: #ffffff;
                    text-decoration: underline;
                  `}
                  className={css`
                    margin-left: ${marginLeft}px;
                    margin-right: ${marginRight}px;
                    :hover {
                      text-decoration: underline;
                    }
                  `}
                >
                  {FILTERS[f]}
                </NavLink>
              );
            })}
          </div>
        </section>
      </section>
      <section
        className={css`
          margin: ${isDesktop ? 76 : 32}px ${isDesktop ? 150 : 27}px 0;
        `}
      >
        <ul
          className={css`
            flex-direction: column;
          `}
        >
          {result?.hits?.map((h: any, i: number) => {
            return (
              <li
                key={i}
                className={css`
                  border-bottom: 1px solid #fff;
                  padding-bottom: 20px;
                `}
              >
                <Link to={`/${h.collection}/${h.address}`}>
                  <div
                    className={css`
                      font-size: 15px;
                      line-height: 1.2;
                      margin-top: 20px;
                    `}
                  >
                    {h.collection}
                  </div>
                  <div
                    className={css`
                      font-size: 20px;
                      line-height: 1.4;
                      margin-top: 20px;
                    `}
                  >
                    {en ? h.title_en : h.title_ko}
                    {en ? h.name_en : h.name_ko}
                  </div>
                  <div
                    className={css`
                      margin-top: 10px;
                      font-size: 17px;
                      line-height: 1.47;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      -webkit-line-clamp: 6;
                      -webkit-box-orient: vertical;
                    `}
                  >
                    <p
                      dangerouslySetInnerHTML={{
                        __html: h._highlightResult?.[`bio_${lang}`]
                          ? h._highlightResult?.[`bio_${lang}`].value
                          : h._highlightResult?.[`body_${lang}`]
                          ? h._highlightResult?.[`body_${lang}`].value
                          : h._highlightResult?.[`notes_${lang}`]
                          ? h._highlightResult?.[`notes_${lang}`].value
                          : h._highlightResult?.[`place_${lang}`],
                      }}
                    />
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
        {result?.hits?.length > 5 && <BtnTop full color="#fff" />}
      </section>
    </main>
  );
}
