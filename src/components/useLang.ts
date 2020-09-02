import { useGlobalState, LANG } from "../store/useGlobalState";
import { css } from "emotion";

function classes(en: boolean): { [key: string]: any } {
  function getSize(size: number, lineHeight: number) {
    return `
      font-size: ${en ? size : size - 4}px;
      line-height: ${size * lineHeight}px;
      font-family: ${en ? "EBGaramond" : "SpoqaHanSans"};
    `;
  }
  return {
    exhibition: {
      date: css`
        font-family: EBGaramond;
        font-size: 19px;
        line-height: 1.32;
        text-align: center;
        color: #5d5d5d;
        margin-top: 13px;
      `,
      type: css`
        font-family: EBGaramond;
        font-size: 15px;
        line-height: 1.27;
        text-align: center;
        color: #afafaf;
        margin-top: 1px;
      `,
      title: css`
        ${getSize(26, 1.31)}
        margin-top: 15px;
        text-align: center;
      `,
      body: css`
        ${getSize(19, 1.42)}
        margin-top: 21px;
      `,
      notes: css`
        ${getSize(16, 1.69)}
        margin-top: 18px;
      `,
    },
  };
}
export default function useLang(type = "exhibition") {
  const [lang] = useGlobalState(LANG);
  const en = lang !== "ko";
  return [classes(en)[type], en];
}
