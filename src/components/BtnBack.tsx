import React from "react";
import { css } from "emotion";
import { useHistory } from "react-router-dom";

export default function BtnBack({
  dark = false,
  full = false,
  borderTop = false,
}) {
  const history = useHistory();
  console.log(document.referrer);
  function goBack() {
    if (history.length < 3) {
      return history.replace("/publication");
    }
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
        width: ${full ? "100%" : "auto"};
        border-top: ${borderTop ? 1 : 0}px solid ${dark ? "#ffffff" : "#707070"};
        color: ${dark ? "#ffffff" : "#707070"};
      `}
    >
      {"<"} back
    </button>
  );
}
