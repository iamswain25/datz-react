import { Lang, useGlobalLang } from "../store/useGlobalState";
import { css } from "emotion";
const getFont = (en: boolean = false) => {
  const minus = 1;
  return (size: number, lineHeight: number, font = "datz-regular") => {
    return css`
      font-family: ${en ? "'EB Garamond'" : font};
      font-size: ${en ? size : size - minus}px;
      line-height: ${size * lineHeight}px;
    `;
  };
};
const classes = {
  publication: (en: boolean) => {
    const getSize = getFont(en);
    return {
      edition: css`
        font-family: "EB Garamond";
        font-size: 19px;
        line-height: 1.32;
        text-align: center;
        color: #5d5d5d;
        margin-top: 12px;
        min-height: 25px;
      `,
      copies_count: css`
        font-family: "EB Garamond";
        font-size: 15px;
        min-height: 19px;
        line-height: 1.27;
        text-align: center;
        color: #afafaf;
        margin-top: 1px;
      `,
      title: css`
        ${getSize(26, 1.31, "datz-medium")}
        margin-top: 23px;
        text-align: center;
        color: #4b4b4b;
        min-height: 34px;
      `,
      artist: css`
        ${getSize(20, 1.3)}
        text-align: center;
        color: #4b4b4b;
        margin-top: 1px;
        min-height: 26px;
      `,
      quotes: css`
        ${getSize(19, 1.42)}
        margin-top: 30px;
        line-height: 28px;
        font-style: ${en ? "italic" : "normal"};
        ${en
          ? "font-family: 'Cormorant Garamond'; font-weight: 500;"
          : undefined};
      `,
      body: css`
        ${getSize(19, 1.42)}
        margin-top: 20px;
        line-height: 28px;
        a {
          text-decoration: underline;
        }
      `,
      notes: css`
        ${getSize(16, 1.69)}
        margin-top: 30px;
        margin-bottom: 40px;
        line-height: 25px;
        a {
          text-decoration: underline;
        }
      `,
    };
  },
  exhibition: (en: boolean) => {
    const getSize = getFont(en);
    return {
      date: css`
        font-family: "EB Garamond";
        font-size: 19px;
        line-height: 1.32;
        text-align: center;
        color: #5d5d5d;
        margin-top: 13px;
      `,
      type: css`
        font-family: "EB Garamond";
        font-size: 15px;
        line-height: 1.27;
        text-align: center;
        color: #afafaf;
        margin-top: 1px;
      `,
      title: css`
        ${getSize(26, 1.31, "datz-medium")}
        margin-top: 23px;
        text-align: center;
        color: #4b4b4b;
      `,
      body: css`
        ${getSize(19, 1.42)}
        margin-top: 21px;
        line-height: 28px;
        color: ${en ? "#4b4b4b" : "#5d5d5d"};
        white-space: break-spaces;
        a {
          text-decoration: underline;
        }
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
    return {
      type: css`
        font-family: datz-medium;
        font-size: 17px;
        line-height: 1.24;
        text-align: center;
        color: #707070;
        border-bottom: solid 1px #707070;
        padding-bottom: 7px;
      `,
      date: css`
        font-family: datz-medium;
        font-size: 17px;
        line-height: 1.18;
        letter-spacing: 0.34px;
        text-align: center;
        color: #707070;
        margin-top: 15px;
      `,
      place: css`
        font-family: datz-regular;
        font-size: 14px;
        line-height: 1.21;
        margin-top: 3px;
        text-align: center;
        color: #afafaf;
        letter-spacing: 0.28px;
      `,

      title: css`
        font-family: datz-medium;
        font-size: 25px;
        line-height: 1.08;
        margin-top: 23px;
        text-align: center;
        color: #4b4b4b;
      `,
      body: css`
        font-family: datz-regular;
        font-size: 18px;
        line-height: 1.5;
        margin-top: 21px;
        margin-bottom: 40px;
        line-height: 28px;
        color: ${en ? "#4b4b4b" : "#5d5d5d"};
        white-space: break-spaces;
        a {
          text-decoration: underline;
        }
      `,
    };
  },
  news: (en: boolean) => {
    return {
      type: css`
        font-family: datz-medium;
        font-size: 17px;
        line-height: 1.24;
        text-align: center;
        border-bottom: solid 1px #fff;
        padding-bottom: 7px;
      `,
      date: css`
        font-family: datz-medium;
        font-size: 17px;
        line-height: 1.18;
        letter-spacing: 0.34px;
        text-align: center;
        margin-top: 15px;
      `,
      place: css`
        font-family: datz-regular;
        font-size: 14px;
        line-height: 1.21;
        margin-top: 3px;
        text-align: center;
        letter-spacing: 0.28px;
      `,

      title: css`
        font-family: datz-medium;
        font-size: 25px;
        line-height: 1.08;
        margin-top: 23px;
        text-align: center;
      `,
      body: css`
        font-family: datz-regular;
        font-size: 18px;
        line-height: 1.5;
        margin-top: 21px;
        margin-bottom: 40px;
        line-height: 28px;
        white-space: break-spaces;
        a {
          text-decoration: underline;
        }
      `,
    };
  },
  eventMainCard: (en: boolean) => {
    return {
      type: css`
        font-family: datz-medium;
        font-size: 16px;
        line-height: 1.19;
        text-align: right;
        color: #707070;
      `,
      date: css`
        font-family: datz-medium;
        font-size: 16px;
        line-height: 1.19;
        text-align: right;
        color: #707070;
      `,
      title: css`
        font-family: datz-medium;
        font-size: 22px;
        line-height: 27px;
        margin-top: 12px;
        text-align: center;
        color: #4b4b4b;
      `,
      body: css`
        font-family: datz-regular;
        font-size: 19px;
        line-height: 1.42px;
        margin-top: 13px;
        color: ${en ? "#4b4b4b" : "#5d5d5d"};
        max-height: 196px;
        line-height: 28px;
        white-space: break-spaces;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;
      `,
    };
  },
  exhibitionMainCard: (en: boolean) => {
    const getSize = getFont(en);
    return {
      type: css`
        font-family: datz-medium;
        font-size: 16px;
        line-height: 1.19;
        text-align: right;
        color: #707070;
      `,
      date: css`
        font-family: datz-medium;
        font-size: 16px;
        line-height: 1.19;
        text-align: right;
        color: #707070;
      `,
      title: css`
        ${getSize(23, 1.19, "datz-medium")}
        letter-spacing: 0.48px;
        margin-top: 12px;
        text-align: center;
        color: #4b4b4b;
      `,
      body: css`
        ${getSize(20, 1.42)}
        line-height: 28px;
        margin-top: 13px;
        color: ${en ? "#4b4b4b" : "#5d5d5d"};
        max-height: 196px;
        white-space: break-spaces;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;
      `,
    };
  },
  artistWidget: (en: boolean) => {
    const getSize = getFont(en);
    return {
      title: css`
        ${getSize(22, 1.23)}
        letter-spacing: 0.44px;
        text-align: center;
        color: #4b4b4b;
        margin-top: 10px;
      `,
      body: css`
        ${getSize(17, 1.47)}
        line-height: 25px;
        margin-top: 13px;
        margin-bottom: 15px;
        color: ${!en ? "#5d5d5d" : "#4b4b4b"};
        max-height: 112px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        white-space: break-spaces;
      `,
    };
  },
  ArtistLeft: (en: boolean) => {
    return {
      bio: css`
        font-family: datz-regular;
        font-size: 17px;
        line-height: 1.5;
        margin-top: 17px;
        white-space: break-spaces;
      `,
    };
  },
  PublicationList: (en: boolean) => {
    const getSize = getFont(en);
    return {
      desc: css`
        ${getSize(18, 1.5)}
        letter-spacing: 0.36px;
        text-align: left;
        color: #4b4b4b;
      `,
      link: css`
        padding: 0 18px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #707070;
        text-align: center;
      `,
      title: css`
        font-family: datz-medium;
        font-size: 19px;
        line-height: 1.21;
      `,
      artist: css`
        font-family: datz-medium;
        font-size: 17px;
        line-height: 1.35;
        margin-top: 5px;
      `,
    };
  },
  ArtistPage: (en: boolean) => {
    return {
      body: css`
        font-family: datz-regular;
        font-size: 18px;
        line-height: 1.39;
        text-align: left;
        line-height: 28px;
        margin-top: 37px;
        white-space: break-spaces;
      `,
    };
  },
  About: (en: boolean) => {
    return {
      body: css`
        font-family: datz-regular;
        font-size: 17px;
        line-height: 1.47;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        text-align: left;
        white-space: break-spaces;
      `,
      title: css`
        font-family: datz-medium;
        font-size: 20px;
        line-height: 1.25;
        text-align: center;
        white-space: break-spaces;
        margin-top: 34px;
      `,
      desc: css`
        font-family: datz-regular;
        font-size: 18px;
        line-height: 28px;
        text-align: left;
        white-space: break-spaces;
        flex: 1;
        margin-bottom: 20px;
      `,
      h1: css`
        font-family: datz-medium;
        font-size: 23px;
        line-height: 1.17;
        text-align: center;
      `,
      h2: css`
        font-family: datz-medium;
        font-size: 17px;
        line-height: 1.56;
        text-align: center;
      `,
    };
  },
  body: (en: boolean) => {
    return {
      regular: (fontSize = 17, lineHeight = 1.5) => {
        return css`
          font-family: datz-regular;
          font-size: ${fontSize}px;
          line-height: 28px;
          text-align: left;
          white-space: break-spaces;
          a {
            text-decoration: underline;
          }
        `;
      },
      regular2: (fontSize = 17, lineHeight = 1.5) => {
        return css`
          font-family: datz-regular;
          font-size: ${fontSize}px;
          line-height: ${lineHeight};
          white-space: break-spaces;
          a {
            text-decoration: underline;
          }
        `;
      },
      book: (fontSize = 17, lineHeight = 1.5) => {
        return css`
          font-family: datz-medium;
          font-size: ${fontSize}px;
          line-height: ${lineHeight};
          text-align: center;
          white-space: break-spaces;
          a {
            text-decoration: underline;
          }
        `;
      },
      ebgaramond: (fontSize = 17, lineHeight = 1.5) => {
        const getSize = getFont(en);
        return css`
          ${getSize(fontSize, lineHeight)}
          text-align: left;
          white-space: break-spaces;
          a {
            text-decoration: underline;
          }
        `;
      },
    };
  },
  ebgaramond: (en: boolean) => {
    return {
      title: (fontSize = 17, lineHeight = 1.5, cssObject = undefined) => {
        const getSize = getFont(en);
        return css`
          ${getSize(fontSize, lineHeight, "datz-medium")}
          text-align: center;
          white-space: break-spaces;
          ${cssObject}
        `;
      },
      type: (cssObject = undefined) => {
        return css`
          font-family: datz-medium;
          text-align: center;
          white-space: break-spaces;
          ${cssObject}
        `;
      },
    };
  },
};
type ClassesType = typeof classes;
export type LangKeys = keyof ClassesType;

export default function useLang<T extends LangKeys>(
  type?: T
): [any, boolean, Lang] {
  const [lang] = useGlobalLang();
  const en = lang !== "ko";
  if (!type) {
    return [undefined, en, lang];
  }
  return [classes[type](en), en, lang];
}

// export default function useLang(
//   type: LangKeys
// ): [ReturnType<ClassesType[LangKeys]>, boolean, Lang] {
//   const [lang] = useGlobalLang();
//   const en = lang !== "ko";
//   return [classes[type](en), en, lang];
// }
