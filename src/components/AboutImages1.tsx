import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import { useGlobalState, LANG } from "../store/useGlobalState";
import {
  marginH18,
  flexcolumncenter,
  paddingH15,
  fullContainImg,
  bottomBtn37,
  marginH10,
  fullCoverImg,
  marginH17,
  marginH37,
} from "./styles";
import a1 from "../assets/images/about/a1.png";
import a2 from "../assets/images/about/a2.png";
import a3 from "../assets/images/about/a3.png";
import { Link } from "react-router-dom";
const titleStyle = css`
  font-family: BauerGroteskOTW03;
  font-size: 23px;
  line-height: 1.17;
  text-align: center;
  color: #ffffff;
  padding-bottom: 6px;
  border-bottom: 1px solid #ffffff;
`;
const descStyle = css`
  font-family: BauerGroteskOTW03;
  font-size: 16px;
  line-height: 1.19;
  text-align: center;
  color: #ffffff;
  margin-top: 12px;
  white-space: break-spaces;
`;
const ulGridStyle = css`
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 27px;
  margin-top: 37px;
`;
const ulMobileStyle = css`
  ${flexcolumncenter}
  margin-top: 10px;
`;
const liStyle = (isDesktop: boolean) => {
  if (isDesktop) {
    return css`
      overflow: hidden;
      ${flexcolumncenter}
    `;
  } else {
    return css`
      overflow: hidden;
      width: 100%;
      margin-top: 30px;

      ${flexcolumncenter}
    `;
  }
};

const liTextStyle = (isDesktop: boolean) => {
  if (isDesktop) {
    return css`
      margin-top: 19px;
      font-family: BauerGroteskOTW03;
      font-size: 19px;
      line-height: 1.42;
      text-align: center;
      color: #ffffff;
      ${paddingH15}
    `;
  } else {
    return css`
      position: absolute;
      margin-top: 19px;
      font-family: BauerGroteskOTW03;
      text-align: center;
      color: #ffffff;
      ${marginH37}
      left: 0;
      width: calc(100% - 74px);
      font-size: 16px;
      line-height: 1.19;
      white-space: break-spaces;
    `;
  }
};
const liDescStyle = (isDesktop: boolean) => {
  if (isDesktop) {
    return css`
      margin-top: 4px;
      font-size: 17px;
      line-height: 1.47;
      text-align: left;
    `;
  } else {
    return css`
      margin-top: 4px;
      font-size: 17px;
      line-height: 1.47;
      text-align: left;
      margin-top: 2px;
      border-top: 1px solid #ffffff;
      text-align: center;
    `;
  }
};
const messagesStyle = (isDesktop: boolean) => css`
  ${bottomBtn37}
  color: #ffffff;
  margin-top: ${isDesktop ? 47 : 0}px;
  border-top: solid ${isDesktop ? 1 : 0}px #ffffff;
  ${isDesktop ? "" : marginH17}
  width: ${isDesktop ? "100%" : "calc(100% - 34px)"};
`;
const linkStyle = (isDesktop: boolean) => css`
  ${flexcolumncenter}
  align-self: stretch;
  font-family: BauerGroteskOTW03;
  font-size: 21px;
  line-height: 1.29;
  text-align: center;
  color: #ffffff;
  ${marginH10}
  padding-top: 15px;
  padding-bottom: 30px;
  border-bottom: ${isDesktop ? 0 : 1}px solid #fff;
  // margin-bottom: ${isDesktop ? 0 : 30}px;
`;
const mobileImg = css`
  ${fullCoverImg}
  height: 588px;
`;
const arr = [
  [
    a1,
    "Datz Press  >",
    "Datz Press is an art book press that works with photographers, designers, and bookmakers. \nWe create, publish, and exhibit books centered on photography.",
    "about/datzpress",
  ],
  [
    a2,
    "D’Ark Room  >",
    "D’Ark Room is a project space for showcasing photographs and books. \nWe hosts lectures, artist talks, and portfolio reviews in collaboration with various artist.",
    "about/darkroom",
  ],
  [
    a3,
    "Datz Museum of Art  >",
    "Datz Museum of Art is a meeting place of nature’s beauty and art. \nWe have curatorial exhibitions revolving around photography and art books as well as carpentry workshops.",
    "about/datzmuseum",
  ],
];
export default function AboutImages1() {
  const isDesktop = useDesktop();
  const [lang] = useGlobalState(LANG);
  return (
    <>
      <section className={isDesktop ? marginH18 : marginH10}>
        <div className={titleStyle}>The community of Datz</div>
        <div className={descStyle}>
          We are a community of creators, curators, enthusiasts and spectators
          of the art world, {"\n"}for whom the work and life of sharing art
          grows from pure motives.
        </div>
      </section>
      <ul className={isDesktop ? ulGridStyle : ulMobileStyle}>
        {arr.map(([imgsrc, title, desc, link], i) => {
          return (
            <li key={i} className={liStyle(isDesktop)}>
              <img
                src={imgsrc}
                alt={title}
                className={isDesktop ? fullContainImg : mobileImg}
              />
              <div className={liTextStyle(isDesktop)}>
                <Link to={link}>
                  {isDesktop ? title : title.substr(0, title.length - 2)}
                </Link>
                <div className={liDescStyle(isDesktop)}>{desc}</div>
              </div>
              {!isDesktop && (
                <Link to={link} className={linkStyle(isDesktop)}>
                  {title}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
      <a className={messagesStyle(isDesktop)} href="/message">
        message {">"}
      </a>
    </>
  );
}
