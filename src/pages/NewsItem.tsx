import React from "react";
import NewsItemLeftSticky from "../components/NewsItemLeftSticky";
import NewsItemRight from "../components/NewsItemRight";
import { useParams } from "react-router-dom";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import ArtistHeader from "../components/ArtistHeader";
import { flexrow, paddingH37 } from "../components/styles";
const desktopContainer = css`
  ${flexrow}
  ${paddingH37}
`;
export default function NewsItem() {
  const { id } = useParams();
  console.log(id);
  const isDesktop = useDesktop();
  if (isDesktop) {
    return (
      <div
        className={css`
          background-color: #afafaf;
        `}
      >
        <ArtistHeader sticky />
        <section className={desktopContainer}>
          <NewsItemLeftSticky />
          <NewsItemRight color="white" />
        </section>
      </div>
    );
  }
  return (
    <div
      className={css`
        background-color: #afafaf;
      `}
    >
      <ArtistHeader sticky />
      <NewsItemRight color="white" children={<NewsItemLeftSticky />} />
    </div>
  );
}
