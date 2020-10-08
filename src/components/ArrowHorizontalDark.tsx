import React from "react";
import { css } from "emotion";
const headerStyle = css`
  font-family: datz-medium;
  font-size: 16px;
  
  line-height: 1.19;
  
  text-align: right;
  color: #ffffff;
`;
export default function ArrowHorizontalDark(
  props: React.PropsWithChildren<{}>
) {
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
    </>
  );
}
