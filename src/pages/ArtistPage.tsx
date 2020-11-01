import React from "react";
import ArtistLeft from "../components/ArtistLeft";
import ArtistRight from "../components/ArtistRight";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import ArtistHeader from "../components/ArtistHeader";
import ArtistMainImage from "../components/ArtistMainImage";
import {
  paddingH17,
  paddingH55,
  flexrow,
  flexcolumn,
} from "../components/styles";
import useDoc from "../utils/useDoc";

const bgContainer = css`
  background-color: #afafaf;
`;
export default function ArtistPage() {
  const isDesktop = useDesktop(true);
  const item = useDoc("artist");
  return (
    <>
      <div className={bgContainer}>
        <ArtistHeader />
        <div className={isDesktop ? paddingH55 : paddingH17}>
          <ArtistMainImage item={item} />
          <section className={isDesktop ? flexrow : flexcolumn}>
            <ArtistLeft item={item} />
            <ArtistRight item={item} />
          </section>
        </div>
      </div>
    </>
  );
}
