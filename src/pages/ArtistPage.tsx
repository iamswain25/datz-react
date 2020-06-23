import React from "react";
import ArtistLeft from "../components/ArtistLeft";
import ArtistRight from "../components/ArtistRight";
import { useParams } from "react-router-dom";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import ArtistHeader from "../components/ArtistHeader";
import ArtistMainImage from "../components/ArtistMainImage";
const desktopContainer = css`
  display: flex;
  flex-direction: row;
`;
const mobileContainer = css`
  display: flex;
  flex-direction: column;
`;
const desktopMargin = css`
  padding-left: 55px;
  padding-right: 55px;
`;
const mobileMargin = css`
  padding-left: 17px;
  padding-right: 17px;
`;
const bgContainer = css`
  background-color: #afafaf;
`;
export default function ArtistPage() {
  const { id } = useParams();
  console.log(id);
  const isDeskTop = useDesktop();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className={bgContainer}>
        <ArtistHeader />
        <div className={isDeskTop ? desktopMargin : mobileMargin}>
          <ArtistMainImage />
          <section className={isDeskTop ? desktopContainer : mobileContainer}>
            <ArtistLeft />
            <ArtistRight />
          </section>
        </div>
      </div>
    </>
  );
}
