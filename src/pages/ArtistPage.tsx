import React from "react";
import ArtistLeft from "../components/ArtistLeft";
import ArtistRight from "../components/ArtistRight";
import { useParams } from "react-router-dom";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import ArtistHeader from "../components/ArtistHeader";
import ArtistMainImage from "../components/ArtistMainImage";
import {
  paddingH27,
  paddingH55,
  flexrow,
  flexcolumn,
} from "../components/styles";

const bgContainer = css`
  background-color: #afafaf;
`;
export default function ArtistPage() {
  const { id } = useParams();
  console.log(id);
  const isDesktop = useDesktop();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className={bgContainer}>
        <ArtistHeader fixed shared />
        <div className={isDesktop ? paddingH55 : paddingH27}>
          <ArtistMainImage />
          <section className={isDesktop ? flexrow : flexcolumn}>
            <ArtistLeft />
            <ArtistRight />
          </section>
        </div>
      </div>
    </>
  );
}
