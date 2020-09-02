import { useGlobalState, LANG } from "../store/useGlobalState";
import { css } from "emotion";

function classes(en: boolean): { [key: string]: any } {
  function getSize(size: number, lineHeight: number) {
    return `
      font-size: ${en ? size : size - 3}px;
      line-height: ${size * lineHeight}px;
      font-family: ${en ? "EBGaramond" : "SpoqaHanSans"};
    `;
  }
  function getSizeBauer(size: number, lineHeight: number) {
    return `
      font-size: ${en ? size : size - 2}px;
      line-height: ${size * lineHeight}px;
    `;
  }
  return {
    publication: {
      edition: css`
        font-family: EBGaramond;
        font-size: 19px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.32;
        letter-spacing: normal;
        text-align: center;
        color: #5d5d5d;
        margin-top: 12px;
      `,
      copies_count: css`
        font-family: EBGaramond;
        font-size: 15px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.27;
        letter-spacing: normal;
        text-align: center;
        color: #afafaf;
        margin-top: 1px;
      `,
      title: css`
        ${getSize(26, 1.31)}
        margin-top: 13px;
        text-align: center;
        color: #4b4b4b;
      `,
      artist: css`
        ${getSize(20, 1.3)}
        text-align: center;
        color: #4b4b4b;
        margin-top: 1px;
      `,
      quotes: css`
        ${getSize(19, 1.42)}
        margin-top: 30px;
        line-height: 28px;
        font-style: ${en ? "italic" : "normal"};
      `,
      body: css`
        ${getSize(19, 1.42)}
        margin-top: 20px;
        line-height: 28px;
      `,
      notes: css`
        ${getSize(16, 1.69)}
        margin-top: 30px;
        margin-bottom: 30px;
        line-height: 25px;
      `,
    },
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
        color: #4b4b4b;
      `,
      body: css`
        ${getSize(19, 1.42)}
        margin-top: 21px;
        line-height: 28px;
        color: ${en ? "#4b4b4b" : "#5d5d5d"};
        white-space: break-spaces;
      `,
      notes: css`
        ${getSize(16, 1.69)}
        margin-top: 30px;
        line-height: 25px;
        color: ${en ? "#4b4b4b" : "#5d5d5d"};
        white-space: break-spaces;
      `,
    },
    event: {
      type: css`
        font-family: BauerGroteskOTW03-Book;
        font-size: 17px;
        line-height: 1.24;
        text-align: center;
        color: #707070;
        border-bottom: solid 1px #707070;
        padding-bottom: 7px;
      `,
      date: css`
        font-family: BauerGroteskOTW03;
        font-size: 17px;
        line-height: 1.18;
        letter-spacing: 0.34px;
        text-align: center;
        color: #707070;
        margin-top: 15px;
      `,

      place: css`
        font-family: ${en ? "BauerGroteskOTW03-Regular" : "SpoqaHanSans"};
        ${getSizeBauer(14, 1.21)}
        margin-top: 3px;
        text-align: center;
        color: #afafaf;
        letter-spacing: 0.28px;
      `,

      title: css`
        font-family: ${en ? "BauerGroteskOTW03" : "SpoqaHanSans"};
        ${getSizeBauer(25, 1.08)}
        margin-top: 15px;
        text-align: center;
        color: #4b4b4b;
      `,
      body: css`
        font-family: ${en ? "BauerGroteskOTW03-Regular" : "SpoqaHanSans"};
        ${getSizeBauer(18, 1.5)}
        margin-top: 21px;
        line-height: 28px;
        color: ${en ? "#4b4b4b" : "#5d5d5d"};
        white-space: break-spaces;
      `,
    },
    eventMainCard: {
      type: css`
        font-family: BauerGroteskOTW03;
        font-size: 16px;
        line-height: 1.19;
        text-align: right;
        color: #707070;
      `,
      date: css`
        font-family: BauerGroteskOTW03;
        font-size: 16px;
        line-height: 1.19;
        text-align: right;
        color: #707070;
      `,
      title: css`
        font-family: ${en ? "BauerGroteskOTW03" : "SpoqaHanSans"};
        font-size: ${en ? 22 : 21}px;
        line-height: 27px;
        margin-top: 12px;
        text-align: center;
        color: #4b4b4b;
      `,
      body: css`
        font-family: ${en ? "BauerGroteskOTW03-Regular" : "SpoqaHanSans"};
        ${getSizeBauer(19, 1.42)}
        margin-top: 13px;
        color: ${en ? "#4b4b4b" : "#5d5d5d"};
        max-height: 196px;
        line-height: 28px;
        white-space: break-spaces;
      `,
    },
    exhibitionMainCard: {
      type: css`
        font-family: BauerGroteskOTW03;
        font-size: 16px;
        line-height: 1.19;
        text-align: right;
        color: #707070;
      `,
      date: css`
        font-family: BauerGroteskOTW03;
        font-size: 16px;
        line-height: 1.19;
        text-align: right;
        color: #707070;
      `,
      title: css`
        font-family: ${en ? "EBGaramond" : "SpoqaHanSans"};
        font-size: ${en ? 24 : 21}px;
        letter-spacing: 0.48px;
        line-height: 27px;
        margin-top: 12px;
        text-align: center;
        color: #4b4b4b;
      `,
      body: css`
        ${getSize(19, 1.42)}
        line-height: 28px;
        margin-top: 13px;
        color: ${en ? "#4b4b4b" : "#5d5d5d"};
        max-height: 196px;
        white-space: break-spaces;
      `,
    },
  };
}
export default function useLang(type = "exhibition") {
  const [lang] = useGlobalState(LANG);
  const en = lang !== "ko";
  return [classes(en)[type], en];
}
