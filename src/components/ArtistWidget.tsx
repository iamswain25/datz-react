import React from "react";
import { css } from "emotion";
import ArrowHorizontal from "./ArrowHorizontal";
// import useDesktop from "./useDesktop";
const artistNameClass = css`
  font-family: ArnoPro-Display;
  font-size: 23px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: 0.46px;
  text-align: center;
  color: #4b4b4b;
`;

const descClass = css`
  height: 97px;
  font-family: BauerGroteskOTW03;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.47;
  letter-spacing: normal;
  text-align: left;
  color: #707070;
  overflow: hidden;
`;

const textClass = css`
  font-family: BauerGroteskOTW03;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: right;
  color: #707070;
`;
export default function ArtistWidget() {
  return (
    <div>
      <h5 className={artistNameClass}>Amanda Marchand {">"}</h5>
      <p className={descClass}>
        A native of Montreal, Canada, Amanda Marchand, is a New York-based
        photographer and writer and received her MFA in photography from the San
        Francisco Art institute. Her work explores the human condition through
        the poetics of landscape, with an experimental approach to photography.
        She has recognized internationally with award, art books, grants and
        residencies. The monograph ‘Nothing Will Ever Be the Same Again’(2019)
        and ‘Night Garden’(2015) was published by Datz Press and artist books
        were also released, ‘The World is Astonishing with You in it’(2019),
        ‘The Book of Hours’(2018), ‘Because the Sky’(2017). As her works are
        exhibited in several exhibitions internationally, ‘True North’ was
        exhibited at Traywick Contemporary in Berkeley, CA, and ‘At the Violet
        Hour’ was exhibited as a site-specific installation in Margate, England.
      </p>
      <ArrowHorizontal>
        <div className={textClass}>Artist</div>
      </ArrowHorizontal>
    </div>
  );
}
