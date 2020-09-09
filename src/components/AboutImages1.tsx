import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import {
  marginH18,
  flexcolumncenter,
  paddingH17,
  bottomBtn37,
  marginH10,
  marginH17,
  marginH37,
} from "./styles";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import useLang from "./useLang";
import { DEFAULT_LAZY_IMAGE_COLOR } from "../config/params";
import useBanners from "../utils/useBanners";
import { makeUrl } from "../config/url";
import Divider from "./Divider";

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
              min-height: 600px;
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
            margin-top: 32px;
          `}
        >
          {main.title}
        </div>
        <Divider
          color="#fff"
          className={css`
            margin-top: 5px;
          `}
        />
        <div
          className={css`
            ${classes.h2}
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
                className={css`
                  overflow: hidden;
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  align-items: stretch;
                  position: relative;
                  width: 100%;
                  margin-top: ${isDesktop ? 0 : 30}px;
                `}
              >
                <div
                  className={css`
                    background-color: ${DEFAULT_LAZY_IMAGE_COLOR};
                    display: flex;
                    flex: 1;
                  `}
                >
                  <div
                    className={
                      isDesktop
                        ? css`
                            background-image: url(${makeUrl(image)});
                            background-position: center;
                            background-size: cover;
                            min-height: 400px;
                            min-width: 0;
                            flex: 1;
                          `
                        : css`
                            background-image: url(${makeUrl(image)});
                            background-position: center;
                            background-size: cover;
                            height: 588px;
                            width: 100%;
                            position: relative;
                            :after {
                              content: "";
                              position: absolute;
                              top: 0;
                              width: 100%;
                              height: 100%;
                              background-color: rgba(0, 0, 0, 0.2);
                            }
                          `
                    }
                  />
                </div>
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
                          ${paddingH17}
                        `
                      : css`
                          position: absolute;
                          margin-top: 19px;
                          font-family: BauerGroteskOTW03;
                          text-align: center;
                          color: #ffffff;
                          ${isDesktop ? marginH37 : marginH10}
                          left: 0;
                          font-size: 16px;
                          line-height: 1.19;
                          white-space: break-spaces;
                        `
                  }
                >
                  <div>{title}</div>
                  <Divider
                    color="#fff"
                    className={css`
                      margin-top: 5px;
                    `}
                  />
                  <div
                    className={css`
                      ${classes.body}
                      margin-top: 12px;
                      text-align: center;
                    `}
                  >
                    {text}
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
      <div
        className={css`
          margin: 0 17px;
        `}
      >
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
      </div>
    </section>
  );
}
