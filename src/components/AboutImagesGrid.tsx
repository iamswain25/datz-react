import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import { flexcolumncenter, paddingH17, marginH10, marginH37 } from "./styles";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { DEFAULT_LAZY_IMAGE_COLOR } from "../config/params";
import Divider from "./Divider";
import useStorage from "./useStorage";
import useLang from "./useLang";

export default function AboutImagesGrid({ item }: { item: any }) {
  const { title, preview, collection, image } = item;
  const [classes] = useLang("About");
  const isDesktop = useDesktop();
  const img = useStorage(image);
  return (
    <Grid item container xs={12} sm={4}>
      <Link
        to={`/about/${collection}`}
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
                    background-image: url(${img});
                    background-position: center;
                    background-size: cover;
                    min-height: 250px;
                    min-width: 0;
                    flex: 1;
                  `
                : css`
                    background-image: url(${img});
                    background-position: center;
                    background-size: cover;
                    height: 527px;
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
                  font-family: datz-medium;
                  font-size: 19px;
                  line-height: 1.42;
                  text-align: center;
                  color: #ffffff;
                  ${paddingH17}
                `
              : css`
                  position: absolute;
                  margin-top: 19px;
                  font-family: datz-medium;
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
            `}
          >
            {preview}
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
}
