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
              position: relative;
              display: flex;
              flex-direction: column;
            `
          : undefined
      }
    >
      <section className={isDesktop ? marginH18 : marginH10}>
        <div
          className={css`
            font-size: 23px;
            line-height: 1.17;
            text-align: center;
            color: #ffffff;
            padding-bottom: 6px;
            border-bottom: 1px solid #ffffff;
          `}
        >
          {main.title}
        </div>
        <div
          className={css`
            font-size: 16px;
            line-height: 1.19;
            text-align: center;
            color: #ffffff;
            margin-top: 12px;
            white-space: break-spaces;
          `}
        >
          {main.text}
        </div>
      </section>
      <Grid
        container
        spacing={isDesktop ? 3 : 0}
        className={css`
          padding-top: ${isDesktop ? 37 : 10}px;
          flex: 1;
          overflow: hidden;
        `}
      >
        {items.map((item, i) => {
          const { title, text, url, image } = item;
          return (
            <Grid item container key={i} xs={12} sm={4}>
              <Link
                to={url}
                className={
                  isDesktop
                    ? css`
                        overflow: hidden;
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        align-items: stretch;
                        position: relative;
                      `
                    : css`
                        overflow: hidden;
                        width: 100%;
                        margin-top: 30px;
                        ${flexcolumncenter}
                      `
                }
              >
                <LazyImage
                  link={image}
                  alt={title}
                  img={
                    isDesktop
                      ? css`
                          object-fit: cover;
                          height: 455px;
                          min-height: 0;
                          min-width: 0;
                          max-height: none;
                          flex: 1;
                        `
                      : css`
                          object-fit: cover;
                          height: 588px;
                          width: 100%;
                        `
                  }
                  placeholder={css`
                    background-color: ${DEFAULT_LAZY_IMAGE_COLOR};
                    height: ${isDesktop ? "100%" : "588px"};
                    flex: 1;
                  `}
                />
                <div
                  className={
                    isDesktop
                      ? css`
                          margin-top: 19px;
                          height: 150px;
                          font-family: BauerGroteskOTW03;
                          font-size: 19px;
                          line-height: 1.42;
                          text-align: center;
                          color: #ffffff;
                          ${paddingH15}
                        `
                      : css`
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
                        `
                  }
                >
                  {isDesktop ? title : title.substr(0, title.length - 2)}
                  <div
                    className={
                      isDesktop
                        ? css`
                            margin-top: 4px;
                            text-align: left;
                          `
                        : css`
                            margin-top: 4px;
                            margin-top: 2px;
                            border-top: 1px solid #ffffff;
                            text-align: center;
                          `
                    }
                  >
                    <div className={classes.body}>{text}</div>
                  </div>
                </div>
                {!isDesktop && (
                  <div
                    className={css`
                      ${flexcolumncenter}
                      align-self: stretch;
                      font-size: 21px;
                      line-height: 1.29;
                      text-align: center;
                      color: #ffffff;
                      ${marginH10}
                      padding-top: 15px;
                      padding-bottom: 30px;
                      border-bottom: ${isDesktop ? 0 : 1}px solid #fff;
                    `}
                  >
                    {title}
                  </div>
                )}
              </Link>
            </Grid>
          );
        })}
      </Grid>
      <a
        className={css`
          ${bottomBtn37}
          color: #ffffff;
          margin-top: ${isDesktop ? 30 : 0}px;
          border-top: solid ${isDesktop ? 1 : 0}px #ffffff;
          ${isDesktop ? "" : marginH17}
          width: ${isDesktop ? "100%" : "calc(100% - 34px)"};
        `}
        href="/message"
      >
        message {">"}
      </a>
    </section>
  );
}
