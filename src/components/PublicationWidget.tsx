import React from "react";
import { css } from "emotion";
import ArrowHorizontal from "./ArrowHorizontal";
import w1 from "../assets/images/readmore/w1.png";
import w2 from "../assets/images/readmore/w2.png";
import w3 from "../assets/images/readmore/w3.png";
import ev1 from "../assets/images/readmore/ev1.png";
import { useHistory } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import useDesktop from "./useDesktop";

const textClass = (dark = false) => css`
  font-family: BauerGroteskOTW03;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: right;
  color: ${dark ? "#ffffff" : "#707070"};
`;
const descClass = (dark = false) => css`
  font-family: BauerGroteskOTW03;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.64;
  letter-spacing: normal;
  text-align: center;
  color: ${dark ? "#ffffff" : "#707070"};
  text-align: center;
  margin-top: 10px;
`;
const listClass = (dark = false, i: number) => css`
  ::after {
    content: "";
    height: 86px;
    border-right: solid ${i === 0 ? 0 : 1}px #cccccc;
    position: absolute;
    top: 50px;
  }
  display: flex;
  flex-direction: column;
  align-items: stretch;
  cursor: pointer;
  flex: 1;
  color: ${dark ? "#ffffff" : "#707070"};
`;
const imgClass = css`
  object-fit: contain;
  width: 100%;
`;
const verticalLine = (
  <div
    className={css`
      height: 86px;
      border-right: solid 1px #cccccc;
      margin-right: 24px;
      margin-left: 24px;
    `}
  />
);
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1000 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 999, min: 0 },
    items: 3,
  },
};
const list = [
  [w1, "Night Garden"],
  [w2, "Magazine Gitz vol.10"],
  [w3, "Nothing Will Ever be the …"],
  // [ev1, "ev1"],
  // [w2, "Magazine Gitz vol.10"],
  // [w3, "Nothing Will Ever be the …"],
];
export default function PublicationWidget({
  dark = false,
}: {
  dark?: boolean;
}) {
  const history = useHistory();
  function clickHandler() {
    history.push("/publication/nothingwill");
  }
  return (
    <>
      <div
        className={css`
          // display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 32px;
          position: relative;
          // max-width: 100%;
        `}
      >
        <Carousel responsive={responsive}>
          {list.map(([img, title], i) => {
            return (
              <div
                key={i}
                className={listClass(dark, i)}
                onClick={clickHandler}
              >
                <img src={img} alt="books" className={imgClass} />
                <span className={descClass(dark)}>{title}</span>
              </div>
            );
          })}
        </Carousel>
      </div>
      <ArrowHorizontal>
        <div className={textClass(dark)}>Publication</div>
      </ArrowHorizontal>
    </>
  );
}
