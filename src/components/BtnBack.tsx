import React from "react";
import { css } from "emotion";
import { useHistory } from "react-router-dom";

export default function BtnBack({ dark = false }) {
  const history = useHistory();
  function goBack() {
    history.goBack();
  }
  return (
    <button
      onClick={goBack}
      className={css`
        font-family: BauerGroteskOTW03;
        font-size: 14px;
        line-height: 1.21;
        text-align: center;
        padding: 10px;
        color: ${dark ? "#ffffff" : "#707070"};
      `}
    >
      {"<"} back
    </button>
  );
}
