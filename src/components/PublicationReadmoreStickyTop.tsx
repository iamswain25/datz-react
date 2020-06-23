import React from "react";
import Datzpress from "../assets/svg/Datzpress";
import { css } from "emotion";
import { useHistory } from "react-router-dom";
import useDesktop from "./useDesktop";
import { useGlobalState, LANG } from "../store/useGlobalState";
const stickyContainer = css`
  align-self: flex-start;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  flex: 1;
  height: 100vh;
  padding-right: 30px;
  font-family: BauerGroteskOTW03;
  display: flex;
  flex-direction: column;
`;
const mobileContainer = css`
  position: relative;
`;
const quoteClass = css`
  font-family: ArnoPro-Display;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: italic;
  line-height: 1.35;
  letter-spacing: 0.4px;
  text-align: left;
  margin-top: 29px;
`;
const p2Class = css`
  font-family: ArnoPro-Display;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.4px;
  text-align: left;
  color: #4b4b4b;
  margin-top: 30px;
  overflow: hidden;
`;

const p3Class = css`
  font-family: ArnoPro-Subhead;
  font-size: 17px;
  line-height: 1.59;
  letter-spacing: normal;
  text-align: left;
  color: #4b4b4b;
  white-space: break-spaces;
`;
const publication = {
  en: {
    title: "Nothing Will Ever be the Same Again",
    artist: "Amanda Marchand",
    content: `<p class="${quoteClass}">
    “Three windows in an old school house. Four, if you count the camera
    as a window, too” - artist’s note
  </p>
  <p class="${p2Class}">
    The book focuses on three windows in a century-old schoolhouse and
    their subtle surprises. The square panes and the window reference the
    medium-format camera frame, producing a square negative. This work is
    a return to a childhood state of pure presence, recalling, long hours
    at play in the Canadian snow. Like the practice of meditation, these
    quiet photographs ask, What happens when you pay attention? The whole
    book consisted of many pages that could be opened and closed like a
    window. In particular, the “For all the knowledge of the world” page
    reveals hidden poems by opening the image as if it were a window. In
    an edition of 300, as the title itself suggests, no two books are
    exactly alike. One page at the end of every book is unique, with a
    different 2 ¼” C-print tipped in.
  </p>
  <p class="${p3Class}">
*Each book has one unique C-print. 
  
Credit
Project Director:
Sangyon Joo
Text: Amanda Marchand
Pre-press: Juyoung Jeong Book
Design: Xianlu Yi
Production: Munsung Print
Specification 29.5 × 25cm / 84 pages
Hard cover binding
Limited Edition,
300 copies
2019
ISBN 978-89-97605-45-3
  </p>`,
  },
  ko: {
    title: "모두 다른 하나의 순간들[SE]",
    artist: "아만다 마찬드",
    content: `<p class="${quoteClass} ko">
“오래된 학교 건물 안 세 개의 창문. 만약 카메라까지 하나의 창으로 생각한다면, 네 개의 창문이 그곳에 있었다.”
- 작가 노트 중
  </p>
  <p class="${p2Class} ko">
아만다 마찬드가 레지던시로 머무른 핀란드의 오래된 건물, 세 개의 창문에서부터 이 책은 시작된다. 작가는 정사각형 포맷의 카메라를 포함한 네 개의 창을 통해 한 순간도 같지 않은 핀란드의 풍광을 바라보았다. 해질녘, 하늘의 새들, 갑작스런 태양 등, 100여년이 된 오래된 창을 통해 미묘하게 변화하는 풍경이 그려진다. 창은 정사각형 포맷의 카메라 프레임을 닮아 있다. 작가는 카메라 뷰파인더와 네모난 창을 통해 한 순간도 같지 않은 풍경을 읽어내는 고요한 ‘관조’의 태도를 실현한다. 

이 작업은 작가가 어린 시절을 보낸 캐나다의 겨울에 대한 기억에서 출발하여 세계를 바라보는 명상의 한 방법으로서 사진을 보여 준다. 책 전체는 창문처럼 여닫을 수 있는 많은 페이지로 구성되었다. 특히, ‘For all the knowledge of the world’ 페이지에서는 창을 열듯 이미지를 열면 숨겨져 있던 시어詩語들이 드러난다.
  </p>
  <p class="${p3Class} ko">
*각 책마다 서로 다른 C-print 한 장을 포함하고 있습니다.

크레딧
프로젝트 디렉터: 주상연
글: 아만다 마찬드
프리-프레스 정주영
북 디자인: 이현노
제작: 문성 인쇄

사양
29.5 × 25 cm / 84 페이지
하드 커버 바인딩
리미티드 에디션, 300 부

2019
ISBN  978-89-97605-45-3
  </p>`,
  },
};
export default function PublicationStickyTop() {
  const isDeskTop = useDesktop();
  const history = useHistory();
  function goBack() {
    history.goBack();
  }
  const [lang] = useGlobalState(LANG);

  return (
    <div className={isDeskTop ? stickyContainer : mobileContainer}>
      <div
        className={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          height: 30px;
          border-bottom: solid 1px #707070;
          padding-bottom: 8px;
        `}
      >
        <Datzpress
          className={css`
            height: 30px;
          `}
        />
        <a
          href="https://datzpress.com/product/offerings-se"
          className={css`
            color: #707070;
          `}
        >
          Order {">"}
        </a>
      </div>
      <section
        className={css`
          flex: 1;
          overflow-x: scroll;
        `}
      >
        <div
          className={css`
            font-family: ArnoPro-Subhead;
            font-size: 20px;
            line-height: 1.4;
            letter-spacing: 0.4px;
            text-align: center;
            color: #707070;
            margin-top: 18px;
          `}
        >
          Limited Edition
        </div>
        <div
          className={css`
            font-family: ArnoPro-Subhead;
            font-size: 16px;
            line-height: 1.38;
            letter-spacing: 0.32px;
            text-align: center;
            color: #afafaf;
            margin-top: 3px;
          `}
        >
          300 copies
        </div>
        <div
          className={css`
            font-family: ${lang === "ko" ? "SpoqaHanSans" : "ArnoPro-Subhead"};
            font-size: 27px;
            line-height: 1.19;
            letter-spacing: 0.54px;
            text-align: center;
            color: #4b4b4b;
            margin-top: 28px;
          `}
        >
          {publication[lang]?.title}
        </div>
        <div
          className={css`
            font-family: ${lang === "ko" ? "SpoqaHanSans" : "ArnoPro-Display"};
            font-size: 21px;
            line-height: 1.38;
            letter-spacing: 0.42px;
            text-align: center;
            color: #4b4b4b;
            margin-top: 4px;
          `}
        >
          {publication[lang]?.artist}
        </div>
        <div dangerouslySetInnerHTML={{ __html: publication[lang].content }} />
      </section>
      {isDeskTop && (
        <div
          className={css`
            align-items: center;
            justify-content: flex-end;
            display: flex;
            flex-direction: column;
            padding-top: 20px;
            padding-bottom: 20px;
          `}
        >
          <hr
            className={css`
              height: 0;
              width: 100%;
              border-bottom: solid 1px #707070;
              border-top: none;
            `}
          />
          <button
            onClick={goBack}
            className={css`
              font-family: BauerGroteskOTW03;
              font-size: 14px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.21;
              letter-spacing: normal;
              text-align: center;
              color: #707070;
            `}
          >
            {"<"} back
          </button>
        </div>
      )}
    </div>
  );
}
