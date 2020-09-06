import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import {
  marginH18,
  flexcolumncenter,
  paddingH15,
  bottomBtn37,
  marginH10,
  marginH17,
  marginH37,
} from "./styles";
import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";
import { Grid } from "@material-ui/core";
import useLang from "./useLang";
import { DEFAULT_LAZY_IMAGE_COLOR } from "../config/params";
import useBanners from "../utils/useBanners";
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

const liStyle = (isDesktop: boolean) => {
  if (isDesktop) {
    return css`
      overflow: hidden;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      position: relative;
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
      height: 150px;
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
      text-align: left;
    `;
  } else {
    return css`
      margin-top: 4px;
      margin-top: 2px;
      border-top: 1px solid #ffffff;
      text-align: center;
    `;
  }
};
const messagesStyle = (isDesktop: boolean) => css`
  ${bottomBtn37}
  color: #ffffff;
  margin-top: ${isDesktop ? 30 : 0}px;
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
`;
export default function AboutImages1() {
  const isDesktop = useDesktop();
  const [classes] = useLang("About");
  const items = useBanners("about", "About");
  const [main] = useBanners("about", "AboutMain");
  return (
    <section
      className={
        isDesktop
          ? css`
              height: calc(100vh - 79px);
              position: relative;
              display: flex;
              flex-direction: column;
            `
          : undefined
      }
    >
      <section className={isDesktop ? marginH18 : marginH10}>
        <div className={titleStyle}>{main.title}</div>
        <div className={descStyle}>{main.text}</div>
      </section>
      <Grid
        container
        spacing={isDesktop ? 3 : 0}
        className={css`
          padding-top: ${isDesktop ? 37 : 10}px;
          flex: 1;
        `}
      >
        {items.map((item, i) => {
          const { title, text, url, image } = item;
          return (
            <Grid item container key={i} xs={12} sm={4}>
              <Link to={url} className={liStyle(isDesktop)}>
                <LazyImage
                  link={image}
                  alt={title}
                  img={css`
                    object-fit: cover;
                    height: ${isDesktop ? "100%" : "588px"};
                    min-height: 0;
                    min-width: 0;
                    max-height: ${isDesktop ? "none" : "588px"};
                    flex: 1;
                    width: ${isDesktop ? "auto" : "100%"};
                  `}
                  placeholder={css`
                    background-color: ${DEFAULT_LAZY_IMAGE_COLOR};
                    height: ${isDesktop ? "100%" : "588px"};
                    flex: 1;
                  `}
                />
                <div className={liTextStyle(isDesktop)}>
                  {isDesktop ? title : title.substr(0, title.length - 2)}
                  <div className={liDescStyle(isDesktop)}>
                    <div className={classes.body}>{text}</div>
                  </div>
                </div>
                {!isDesktop && (
                  <div className={linkStyle(isDesktop)}>{title}</div>
                )}
              </Link>
            </Grid>
          );
        })}
      </Grid>
      <a className={messagesStyle(isDesktop)} href="/message">
        message {">"}
      </a>
    </section>
  );
}
