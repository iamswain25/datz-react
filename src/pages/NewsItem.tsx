import React from "react";
import NewsItemLeftSticky from "../components/NewsItemLeftSticky";
import NewsItemRight from "../components/NewsItemRight";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import ArtistHeader from "../components/ArtistHeader";
import { paddingH37 } from "../components/styles";
import { Grid } from "@material-ui/core";
const desktopContainer = css`
  ${paddingH37}
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
              <NewsItemLeftSticky />
            </Grid>
            <Grid item sm={6} container>
              <NewsItemRight color="white" />
            </Grid>
          </Grid>
        </section>
      </>
    );
  }
  return (
    <>
      <ArtistHeader sticky />
      <NewsItemRight color="white" children={<NewsItemLeftSticky />} />
    </>
  );
}
