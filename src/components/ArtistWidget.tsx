import React from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import CarouselBtnGroup from "./CarouselBtnGroup";
import Carousel from "react-multi-carousel";
import useDesktop from "./useDesktop";
import useArtists from "../utils/useArtists";
import useLang from "./useLang";
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
  artists: string[];
}) {
  const [classes] = useLang("artistWidget");
  const isDesktop = useDesktop();
  const list = useArtists(artists);
  if (!list.length) {
    return null;
  }
  return (
    <div>
      <div
        className={css`
          margin-top: 45px;
          padding-left: ${isDesktop ? 17 : 0}px;
          padding-right: ${isDesktop ? 17 : 0}px;
        `}
      >
        <Carousel
          responsive={responsive}
          containerClass={css`
            flex: 1;
            align-items: normal;
          `}
          itemClass={itemClass}
          renderButtonGroupOutside={true}
          arrows={false}
          customButtonGroup={
            <CarouselBtnGroup dark={dark} hasPadding={false}>
              <div className={textClass(dark)}>Artist</div>
            </CarouselBtnGroup>
          }
        >
          {list.map(({ name, bio, address }, i) => {
            return (
              <Link to={`/artist/${address}`} key={i}>
                <p className={classes.title}>
                  {name} {">"}
                </p>
                <p className={classes.body}>{bio}</p>
              </Link>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
