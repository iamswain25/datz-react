import React from "react";
import NewsItemLeft from "../components/NewsItemLeft";
import NewsItemRight from "../components/NewsItemRight";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import ArtistHeader from "../components/ArtistHeader";
import { paddingH37 } from "../components/styles";
import { Grid } from "@material-ui/core";
import useDoc from "../utils/useDoc";
import ArtistCloseBtn from "../components/ArtistCloseBtn";
const desktopContainer = css`
  ${paddingH37}
  height: calc(100vh - 79px);
  position: relative;
  overflow: hidden;
`;
export default function NewsItem() {
  const isDesktop = useDesktop(true);
  const item = useDoc("news");
  if (isDesktop) {
    return (
      <>
        <ArtistHeader
          color="#fff"
          className={css`
            color: #fff;
          `}
        >
          <ArtistCloseBtn
            to="/news"
            title="< back to News"
            className={css`
              color: #fff;
            `}
          />
        </ArtistHeader>
        <section className={desktopContainer}>
          <Grid container spacing={3}>
            <Grid item sm={6}>
              <NewsItemLeft item={item} />
            </Grid>
            <Grid item sm={6} container>
              <NewsItemRight item={item} />
            </Grid>
          </Grid>
        </section>
      </>
    );
  }
  return (
    <>
      <ArtistHeader />
      <NewsItemRight item={item} children={<NewsItemLeft item={item} />} />
    </>
  );
}
