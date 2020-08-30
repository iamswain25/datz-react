import React from "react";
import { css } from "emotion";
import { useGlobalState, LANG } from "../store/useGlobalState";
import { Link } from "react-router-dom";
import CarouselBtnGroup from "./CarouselBtnGroup";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useDesktop from "./useDesktop";
import useArtists from "../utils/useArtists";
const artistNameClass = css`
  font-family: ArnoPro-Display;
  font-size: 23px;
  line-height: 1.17;
  letter-spacing: 0.46px;
  color: #4b4b4b;
  margin-bottom: 20px;
`;
const artistNameClassKo = css`
  margin-bottom: 20px;
  font-family: SpoqaHanSans;
  font-size: 19px;
  font-weight: normal;
  font-stretch: normal;

  line-height: 1.42;
  color: #4b4b4b;
`;

const descClass = css`
  height: 100px;
  font-family: BauerGroteskOTW03;
  font-size: 17px;
  line-height: 1.47;
  text-align: left;
  color: #707070;
  overflow: hidden;
  margin-top: 12px;
`;
const descClassKo = css`
  height: 100px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.79;
  text-align: left;
  color: #707070;
  overflow: hidden;
  margin-top: 11px;
`;
const textClass = (dark = false) => css`
  font-family: BauerGroteskOTW03;
  font-size: 16px;
  line-height: 1.19;
  text-align: right;
  color: ${dark ? "#ffffff" : "#707070"};
`;
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
  },
};
const itemClass = css`
  display: flex;
  align-items: center;
  height: auto;
`;
export default function ArtistWidget({
  dark = false,
  artists,
}: {
  dark?: boolean;
  artists: any[];
}) {
  const [lang] = useGlobalState(LANG);
  const isDesktop = useDesktop();
  const list = useArtists(artists);
  if (!list.length) {
    return null;
  }
  return (
    <div>
      <div
        className={css`
          margin-top: ${lang === "ko" ? 45 : 49}px;
          padding-left: ${isDesktop ? 17 : 0}px;
          padding-right: ${isDesktop ? 17 : 0}px;
        `}
      >
        <Carousel
          responsive={responsive}
          containerClass="carousel-container-custom"
          itemClass={itemClass}
          renderButtonGroupOutside={true}
          arrows={false}
          customButtonGroup={
            <CarouselBtnGroup dark={dark} hasPadding={false}>
              <div className={textClass(dark)}>Artist</div>
            </CarouselBtnGroup>
          }
        >
          {list.map(({ name, bio, id }, i) => {
            return (
              <div
                key={i}
                className={css`
                  text-align: center;
                `}
              >
                <Link
                  to={`/artist/${id}`}
                  className={
                    lang === "ko" ? artistNameClassKo : artistNameClass
                  }
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  {name} {">"}
                </Link>
                <p className={lang === "ko" ? descClassKo : descClass}>{bio}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
