import React from "react";
import { css } from "emotion";
import { paddingH37, paddingH17 } from "./styles";
import { Grid } from "@material-ui/core";
import useDesktop from "./useDesktop";
import useBanners from "../utils/useBanners";
import useLang from "./useLang";
export default function SupportBottomThree() {
  const isDesktop = useDesktop();
  const items = useBanners("about", "Support");
  const [classes] = useLang("body");
  return (
    <Grid
      className={css`
        padding-bottom: 43px;
        color: #ffffff;
        text-align: center;
        background-color: #afafaf;
        ${isDesktop ? paddingH37 : paddingH17}
      `}
    >
      <Grid container spacing={isDesktop ? 3 : 0}>
        {items.map((item, i) => {
          const { title, text } = item;
          return (
            <Grid item xs={12} sm={4} key={i}>
              <div
                className={css`
                  ${classes.book(21, 1.29)}
                  margin-top: 54px;
                `}
              >
                {title}
              </div>
              <div
                className={css`
                  ${classes.book(17, 1.47)}
                  margin-top: 10px;
                `}
              >
                {text}
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
