import React from "react";
import { css } from "emotion";
import ArrowHorizontal from "./ArrowHorizontal";
import w1 from "../assets/images/readmore/w1.png";
import w2 from "../assets/images/readmore/w2.png";
import w3 from "../assets/images/readmore/w3.png";
import { useHistory } from "react-router-dom";
// import useDesktop from "./useDesktop";

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
const descClass = css`
  font-family: BauerGroteskOTW03;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.64;
  letter-spacing: normal;
  text-align: center;
  color: #707070;
  text-align: center;
  margin-top: 10px;
`;
const listClass = css`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  cursor: pointer;
  flex: 1;
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
export default function PublicationWidget() {
  const history = useHistory();
  function clickHandler() {
    history.push("/publication/nothingwill");
  }
  return (
    <div>
      <ul
        className={css`
          align-items: center;
          justify-content: center;
          margin-top: 32px;
        `}
      >
        <li className={listClass} onClick={clickHandler}>
          <img src={w1} alt="w1" className={imgClass} />
          <span className={descClass}>Night Garden</span>
        </li>
        {verticalLine}
        <li className={listClass} onClick={clickHandler}>
          <img src={w2} alt="w2" className={imgClass} />
          <span className={descClass}>Magazine Gitz vol.10 </span>
        </li>
        {verticalLine}
        <li className={listClass} onClick={clickHandler}>
          <img src={w3} alt="w3" className={imgClass} />
          <span className={descClass}>Nothing Will Ever be the …</span>
        </li>
      </ul>
      <ArrowHorizontal>
        <div className={textClass}>Publication</div>
      </ArrowHorizontal>
    </div>
  );
}
