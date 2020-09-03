import React from "react";
import { css } from "emotion";
import { useHistory } from "react-router-dom";
import CarouselBtnGroup from "./CarouselBtnGroup";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useDesktop from "./useDesktop";
import { makeUrl } from "../config/url";
const listClass = (dark = false) => css`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  cursor: pointer;
  flex: 1;
  color: ${dark ? "#ffffff" : "#707070"};
  width: 100%;
`;
const afterClass = (i: number) => css`
  position: relative;
  width: 100%;
`;
const itemClass = css`
  display: flex;
  align-items: center;
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1000 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 999, min: 0 },
    items: 1,
  },
};
export default function EventCoverWidget({
  dark = false,
  images,
  objectFit = "cover",
}: {
  dark?: boolean;
  images: any[];
  objectFit?: string;
}) {
  const isDesktop = useDesktop();
  const history = useHistory();
  function clickHandler() {
    history.push("/publication/nothingwill");
  }
  return (
    <div
      className={`home ${css`
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        padding-bottom: 37px;
      `}`}
    >
      <Carousel
        responsive={responsive}
        containerClass={css`flex: 1;
  align-items: normal;`}
        itemClass={itemClass}
        renderButtonGroupOutside={true}
        arrows={false}
        customButtonGroup={
          <CarouselBtnGroup dark={dark} noBorderBottom={!isDesktop} />
        }
      >
        {images.map((img, i) => {
          return (
            <div key={i} className={afterClass(i)} onClick={clickHandler}>
              <div className={listClass(dark)}>
                <img
                  src={makeUrl(img)}
                  alt="event"
                  className={css`
                    object-fit: ${objectFit};
                  `}
                />
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
