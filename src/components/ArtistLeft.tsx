import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import { useGlobalState, LANG } from "../store/useGlobalState";
const stickyContainer = css`
  border-top: 1px solid #ffffff;
  padding-top: 43px;
  // top: 79px;
  flex: 1;
  margin-right: 30px;
  font-family: BauerGroteskOTW03;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  margin-bottom: 36px;
`;
const mobileContainer = css`
  position: relative;
  color: #ffffff;
`;
const publication = {
  en: {
    bio: `A native of Montreal, Canada, Amanda Marchand, is a New York-based photographer and writer and received her MFA in photography from the San Francisco Art institute. Her work explores the human condition through the poetics of landscape, with an experimental approach to photography. She  has recognized internationally with award, art books, grants and residencies. The monograph ‘Nothing Will Ever Be the Same Again’(2019) and ‘Night Garden’(2015) was published by Datz Press and artist books were also released, ‘The World is Astonishing with You in it’(2019), ‘The Book of Hours’(2018), ‘Because the Sky’(2017). As her works are exhibited in several exhibitions internationally, ‘True North’ was exhibited at Traywick Contemporary in Berkeley, CA, and ‘At the Violet Hour’ was exhibited as a site-specific installation in Margate, England. `,
    artist: "Amanda Marchand",
  },
  ko: {
    bio: `로니 그래험은 현재 펜실베니아 주립대학의 연구원이자 교수로 재직 중이며, 포토얼라이언스의 디렉터이기도 하다. 펜실베니아 예술 위원회와 워싱턴의 국립예술재단 자문위원으로 활동하며 예술로 사회를 변화시키고자 하는 사회운동에 관심을 가지고 있다. 2005년 펜실베니아주의 ‘올해의 작가’로 선정되었고, 피츠버그 문화재단으로부터 창조 공로상을 수상했다. 뉴욕 퀸즈 미술관에서 <정원 길 아래에서> 전시에 기획자로 참여했으며, 가나의 괴테 인스티튜트 사진전, 프랑스 파리의 라 메종 드 에따 쥬니, 일본 도요타 시립미술관, 워싱턴 스미소니언 박물관 등 다수의 전시에 참여했다. 미국 매사추세츠의 에디슨 갤러리와 필라델피아 미술관 등 다수의 기관에 작품이 소장되어 있다.`,
    artist: "아만다 마찬드",
  },
};
export default function ArtistLeft() {
  const isDeskTop = useDesktop();
  const [lang] = useGlobalState(LANG);

  return (
    <div className={isDeskTop ? stickyContainer : mobileContainer}>
      <section
        className={css`
          flex: 1;
          overflow-x: scroll;
          padding-left: 10px;
          padding-right: 10px;
        `}
      >
        <div
          className={css`
            font-family: BauerGroteskOTW03;
            font-size: 20px;
            line-height: 1.35;
            text-align: center;
            margin-bottom: 17px;
          `}
        >
          Biography
        </div>

        <div
          className={css`
            font-family: ${lang === "ko" ? "SpoqaHanSans" : "ArnoPro-Subhead"};
            font-size: ${lang === "ko" ? 16 : 19}px;
            line-height: ${lang === "ko" ? 1.69 : 1.42};
            text-align: left;
            color: #ffffff;
          `}
        >
          {publication[lang]?.bio}
        </div>
      </section>
      {isDeskTop && (
        <div
          className={css`
            align-items: center;
            justify-content: flex-end;
            display: flex;
            flex-direction: column;
            padding-top: 20px;
            font-family: BauerGroteskOTW03;
            font-size: 17px;
            line-height: 1.47;
            text-align: center;
            color: #ffffff;
          `}
        >
          <div>amandamarchand.com</div>
          <div>marydaniel.hobson.gmail.com</div>
          <hr
            className={css`
              margin-top: 24px;
              width: 100%;
              border-top: solid 1px #ffffff;
            `}
          />
        </div>
      )}
    </div>
  );
}
