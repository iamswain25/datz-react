import React from "react";
import { css } from "emotion";
import darkroom from "../assets/images/darkroom.svg";

const bookStyle = css`
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  font-family: BauerGroteskOTW03;
  font-size: 19px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;
const subHead = css`
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  font-family: ArnoPro-Subhead;
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: 0.44px;
  text-align: center;
  color: #ffffff;
`;
const subDesc = css`
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  font-family: ArnoPro-Display;
  font-size: 26px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: 0.52px;
  text-align: center;
  color: #ffffff;
`;
export default () => {
  return (
    <section
      className={css`
        padding: 37px;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        flex: 1;
        justify-content: space-between;
      `}
    >
      <div
        className={css`
          text-align: center;
        `}
      >
        <div className={bookStyle}>Past Events ></div>
        <div
          className={css`
            height: 0;
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
            border: solid 1px #ffffff;
            margin: 23px;
          `}
        ></div>
        <div className={subHead}>2019.11.11</div>
        <div className={subDesc}>FNL#6 Barbara Bosworth’s Photobook Talk</div>
      </div>
      <div>
        <img
          src={darkroom}
          alt="darkroom"
          className={css`
            height: 30px;
          `}
        />
      </div>
    </section>
  );
};
