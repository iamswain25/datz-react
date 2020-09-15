import React from "react";
import { css } from "emotion";
import { Link, useParams } from "react-router-dom";
import CarouselBtnGroup from "./CarouselBtnGroup";
import Carousel from "react-multi-carousel";

import useDesktop from "./useDesktop";
import { makeUrl } from "../config/url";
import { DEFAULT_LAZY_IMAGE_COLOR } from "../config/params";
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
  linkDisabled = false,
  images,
  objectFit = "cover",
  type = "event",
  fit = "height",
}: {
  dark?: boolean;
  linkDisabled?: boolean;
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
          const content = (
            <div
              className={css`
                background-color: ${DEFAULT_LAZY_IMAGE_COLOR};
                display: flex;
                flex: 1;
              `}
            >
              <div
                className={css`
                  background-image: url(${makeUrl(img)});
                  background-position: center;
                  background-size: cover;
                  background-repeat: no-repeat;
                  flex: 1;
                  height: 100vw;
                  color: ${dark ? "#ffffff" : "#707070"};
                `}
              />
            </div>
          );
          if (linkDisabled) {
            return (
              <span key={i} className={afterClass(i)}>
                {content}
              </span>
            );
          }
          return (
            <Link key={i} className={afterClass(i)} to={`/${type}/${id}`}>
              {content}
            </Link>
          );
        })}
      </Carousel>
    </div>
  );
}
