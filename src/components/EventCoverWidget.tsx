import React from "react";
import { css } from "emotion";
import { Link, useParams } from "react-router-dom";
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
  width: inherit;
  height: inherit;
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
  type = "event",
  fit = "height",
}: {
  dark?: boolean;
  images: any[];
  objectFit?: string;
  fit?: string;
  type?: string;
}) {
  const isDesktop = useDesktop();
  const { id } = useParams();
  return (
    <div
      className={`${fit} ${css`
        ${fit}: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
      `}`}
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
          <CarouselBtnGroup
            dark={dark}
            noBorderBottom={!isDesktop}
            plusMargin={fit === "width" ? 20 : 0}
          />
        }
      >
        {images.map((img, i) => {
          return (
            <Link key={i} className={afterClass(i)} to={`/${type}/${id}`}>
              <div className={listClass(dark)}>
                <img
                  src={makeUrl(img)}
                  alt="event"
                  className={css`
                    object-fit: ${objectFit};
                  `}
                />
              </div>
            </Link>
          );
        })}
      </Carousel>
    </div>
  );
}
