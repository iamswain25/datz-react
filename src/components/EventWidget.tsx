import React from "react";
import { css } from "emotion";
import ArrowHorizontal from "./ArrowHorizontal";
import ev1 from "../assets/images/readmore/ev1.png";
import ev2 from "../assets/images/readmore/ev2.png";
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
  padding-left: 4px;
  padding-right: 4px;
  flex: 1;
`;
const imgClass = css`
  object-fit: contain;
  width: 100%;
`;
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
          <img src={ev1} alt="ev1" className={imgClass} />
          <span className={descClass}>Book of Lights</span>
        </li>
        <li className={listClass} onClick={clickHandler}>
          <img src={ev2} alt="ev1" className={imgClass} />
          <span className={descClass}>Synesthesia : The Space Between</span>
        </li>
      </ul>
      <ArrowHorizontal>
        <div className={textClass}>Event</div>
      </ArrowHorizontal>
    </div>
  );
}