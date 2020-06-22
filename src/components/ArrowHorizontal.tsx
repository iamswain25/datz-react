import React from "react";
import { css } from "emotion";
const headerStyle = css`
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
export default function ArrowHorizontal(props: React.PropsWithChildren<{}>) {
  return (
    <>
      <div
        className={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding-top: 10px;
          padding-bottom: 10px;
        `}
      >
        <div className={headerStyle}>
          <button
            className={css`
              ${headerStyle};
              margin-right: 13px;
            `}
          >
            ←
          </button>
          <button
            className={css`
              ${headerStyle};
              margin-left: 13px;
            `}
          >
            →
          </button>
        </div>
        {props.children}
      </div>
      <div
        className={css`
          height: 0;
          border-bottom: solid 1px #707070;
        `}
      ></div>
    </>
  );
}