import React from "react";
import NewsItemLeft from "../components/NewsItemLeft";
import NewsItemRight from "../components/NewsItemRight";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import ArtistHeader from "../components/ArtistHeader";
import { paddingH37 } from "../components/styles";
import { Grid } from "@material-ui/core";
const desktopContainer = css`
  ${paddingH37}
  height: calc(100vh - 79px);
  position: relative;
  overflow: hidden;
`;
export default function NewsItem() {
  const isDesktop = useDesktop();
  if (isDesktop) {
    return (
      <>
        <ArtistHeader sticky />
        <section className={desktopContainer}>
          <Grid container spacing={3}>
            <Grid item sm={6}>
              <NewsItemLeft />
            </Grid>
            <Grid item sm={6} container>
              <NewsItemRight />
            </Grid>
          </Grid>
        </section>
      </>
    );
  }
  return (
    <>
      <ArtistHeader sticky />
      <NewsItemRight children={<NewsItemLeft />} />
    </>
  );
}
