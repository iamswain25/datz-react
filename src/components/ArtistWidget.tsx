import React from "react";
import { css } from "emotion";
import ArrowHorizontal from "./ArrowHorizontal";
import { useGlobalState, LANG } from "../store/useGlobalState";
import { useHistory } from "react-router-dom";
// import useDesktop from "./useDesktop";
const artistNameClass = css`
  font-family: ArnoPro-Display;
  font-size: 23px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: 0.46px;
  text-align: center;
  color: #4b4b4b;
`;

const descClass = css`
  height: 100px;
  font-family: BauerGroteskOTW03;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.47;
  letter-spacing: normal;
  text-align: left;
  color: #707070;
  overflow: hidden;
`;

const textClass = css`
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
const artist = {
  en: {
    name: "Amanda Marchand",
    desc: `A native of Montreal, Canada, Amanda Marchand, is a New York-based
photographer and writer and received her MFA in photography from the San
Francisco Art institute. Her work explores the human condition through
the poetics of landscape, with an experimental approach to photography.
She has recognized internationally with award, art books, grants and
residencies. The monograph ‘Nothing Will Ever Be the Same Again’(2019)
and ‘Night Garden’(2015) was published by Datz Press and artist books
were also released, ‘The World is Astonishing with You in it’(2019),
‘The Book of Hours’(2018), ‘Because the Sky’(2017). As her works are
exhibited in several exhibitions internationally, ‘True North’ was
exhibited at Traywick Contemporary in Berkeley, CA, and ‘At the Violet
Hour’ was exhibited as a site-specific installation in Margate, England.`,
  },

  ko: {
    name: "아만다 마찬드",
    desc: `아만다 마찬드는 캐다나 출신의 사진가이자 글쓰는 작가로 샌프란시스코 아트 인스티튜트에서 사진을 전공하였다. 개인의 경험을 시적 풍경의 사진으로 담아내며 실험적인 방법의 사진을 시도하고 있다. 닻프레스를 통해 「밤의 정원」(2015)과 「모두 다른 하나의 순간」(2019)을 출간했으며, 그 외 주요 아티스트 북으로는 「Because the Sky」(2017), 「The Book of Hours」(2018), 「The world is Astonishing with You in it」(2019)과 DC 북스에서 출판된 소설 「without cease the earth faintly trembles」가 있다. 미국 버클리 트레이윅 컨템포러리 갤러리(2018)에서의 개인전과 여러 단체전에 참여했다.
    `,
  },
};
export default function ArtistWidget() {
  const [lang] = useGlobalState(LANG);
  const history = useHistory();
  function goToArtist() {
    history.push("/artist/Amanda Marchand");
  }
  return (
    <div style={{ cursor: "pointer" }} onClick={goToArtist}>
      <h5 className={`${artistNameClass} ${lang === "ko" ? "ko" : ""}`}>
        {artist[lang].name} {">"}
      </h5>
      <p className={`${descClass} ${lang === "ko" ? "ko" : ""}`}>
        {artist[lang].desc}
      </p>
      <ArrowHorizontal>
        <div className={textClass}>Artist</div>
      </ArrowHorizontal>
    </div>
  );
}
