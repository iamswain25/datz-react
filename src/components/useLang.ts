import { useGlobalState, LANG } from "../store/useGlobalState";
import { css } from "emotion";
const getFont = (
  font:
    | "EBGaramond"
    | "BauerGroteskOTW03-Regular"
    | "BauerGroteskOTW03" = "EBGaramond",
  en: boolean = false
) => {
  const minus = (() => {
    switch (font) {
      case "BauerGroteskOTW03":
        return 2;
      case "BauerGroteskOTW03-Regular":
        return 2;
      case "EBGaramond":
        return 3;
    }
  })();
  return (size: number, lineHeight: number) => {
    return css`
      font-family: ${en ? font : "SpoqaHanSans"};
      font-size: ${en ? size : size - minus}px;
      line-height: ${size * lineHeight}px;
    `;
  };
};
const classes: { [key: string]: any } = {
  publication: (en: boolean) => {
    const getSize = getFont("EBGaramond", en);
    return {
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
        margin-bottom: 40px;
        line-height: 25px;
      `,
    };
  },
  exhibition: (en: boolean) => {
    const getSize = getFont("EBGaramond", en);
    return {
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
        margin-bottom: 40px;
      `,
    };
  },
  event: (en: boolean) => {
    const getSize = getFont("BauerGroteskOTW03", en);
    return {
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
        ${getSize(14, 1.21)}
        font-family: ${en ? "BauerGroteskOTW03-Regular" : "SpoqaHanSans"};
        margin-top: 3px;
        text-align: center;
        color: #afafaf;
        letter-spacing: 0.28px;
      `,

      title: css`
        ${getSize(25, 1.08)}
        margin-top: 15px;
        text-align: center;
        color: #4b4b4b;
      `,
      body: css`
        ${getSize(18, 1.5)}
        font-family: ${en ? "BauerGroteskOTW03-Regular" : "SpoqaHanSans"};
        margin-top: 21px;
        line-height: 28px;
        color: ${en ? "#4b4b4b" : "#5d5d5d"};
        white-space: break-spaces;
      `,
    };
  },
  eventMainCard: (en: boolean) => {
    const getSize = getFont("BauerGroteskOTW03", en);
    return {
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
        ${getSize(19, 1.42)}
        font-family: ${en ? "BauerGroteskOTW03-Regular" : "SpoqaHanSans"};
        margin-top: 13px;
        color: ${en ? "#4b4b4b" : "#5d5d5d"};
        max-height: 196px;
        line-height: 28px;
        white-space: break-spaces;
      `,
    };
  },
  exhibitionMainCard: (en: boolean) => {
    const getSize = getFont("EBGaramond", en);
    return {
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
    };
  },
  artistWidget: (en: boolean) => {
    const getSize = getFont("EBGaramond", en);
    return {
      title: css`
        ${getSize(22, 1.23)}
        letter-spacing: 0.44px;
        text-align: center;
        color: #4b4b4b;
      `,
      body: css`
        ${getSize(17, 1.47)}
        font-family: ${en ? "BauerGroteskOTW03-Regular" : "SpoqaHanSans"};
        line-height: 28px;
        margin-top: 12px;
        color: #707070;
        max-height: 112px;
        white-space: break-spaces;
      `,
    };
  },
  ArtistLeft: (en: boolean) => {
    const getSize = getFont("BauerGroteskOTW03-Regular", en);
    return {
      bio: css`
        ${getSize(15, 1.8)}
        line-height: 28px;
        margin-top: 17px;
        white-space: break-spaces;
      `,
    };
  },
  ArtistPage: (en: boolean) => {
    const getSize = getFont("BauerGroteskOTW03-Regular", en);
    return {
      body: css`
        ${getSize(18, 1.39)}
        text-align: left;
        line-height: 28px;
        margin-top: 37px;
        white-space: break-spaces;
      `,
    };
  },
  About: (en: boolean) => {
    const getSize = getFont("BauerGroteskOTW03-Regular", en);
    return {
      body: css`
        ${getSize(17, 1.47)}
        // line-height: 28px;
        text-align: left;
        white-space: break-spaces;
      `,
      title: css`
        ${getSize(20, 1.25)}
        font-family: ${en ? "BauerGroteskOTW03" : "SpoqaHanSans"};
        text-align: center;
        white-space: break-spaces;
        margin-top: 34px;
      `,
      desc: css`
        ${getSize(18, 1.39)}
        line-height: 28px;
        text-align: left;
        white-space: break-spaces;
        flex: 1;
      `,
    };
  },
};

export default function useLang(type = "exhibition") {
  const [lang] = useGlobalState(LANG);
  const en = lang !== "ko";
  return [classes[type](en), en];
}
