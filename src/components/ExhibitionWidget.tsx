import React from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import CarouselBtnGroup from "./CarouselBtnGroup";
import Carousel from "react-multi-carousel";

import useExhibitions from "../utils/useExhibitions";
import LazyImage from "./LazyImage";
import { DEFAULT_LAZY_IMAGE_COLOR } from "../config/params";
import useDocs from "../utils/useDocs";

const textClass = (dark = false) => css`
  font-family: datz-medium;
  font-size: 16px;
  line-height: 1.19;
  text-align: right;
  color: ${dark ? "#ffffff" : "#707070"};
`;
const descClass = (dark = false) => css`
  font-family: datz-medium;
  font-size: 14px;
  line-height: 1.64;
  text-align: center;
  color: ${dark ? "#ffffff" : "#707070"};
  text-align: center;
  margin-top: 10px;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const listClass = (dark = false) => css`
  position: relative;
  color: ${dark ? "#ffffff" : "#707070"};
  width: 100%;
  ::before {
    content: "";
    display: inline-block;
    padding-bottom: 50.51%;
    vertical-align: top;
`;
const afterClass = (i: number) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  cursor: pointer;
  flex: 1;
  padding-left: 4px;
  padding-right: 4px;
  overflow: hidden;
`;
const itemClass = css`
  display: flex;
  align-items: center;
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1000 },
    items: 2,
    // partialVisibilityGutter: 10,
  },
  mobile: {
    breakpoint: { max: 999, min: 0 },
    items: 2,
    // partialVisibilityGutter: 10,
  },
};
export default function ExhibitionWidget({
  dark = false,
  rel_exhibitions,
}: {
  rel_exhibitions: string[];
  dark?: boolean;
}) {
  const items = useDocs("exhibition", rel_exhibitions);
  const list = useExhibitions(items);
  if (!(list && list.length)) {
    return null;
  }
  return (
    <div
      className={css`
        margin-top: 32px;
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
          <CarouselBtnGroup dark={dark}>
            <div className={textClass(dark)}>Exhibition</div>
          </CarouselBtnGroup>
        }
      >
        {list.map((item, i) => {
          const { images, title, id } = item;
          return (
            <Link key={i} className={afterClass(i)} to={`/exhibition/${id}`}>
              <div className={listClass(dark)}>
                <LazyImage
                  alt={item.title}
                  link={images[0]}
                  placeholder={css`
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-color: ${DEFAULT_LAZY_IMAGE_COLOR};
                    top: 0;
                  `}
                  img={css`
                    position: absolute;
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                  `}
                />
              </div>
              <span className={descClass(dark)}>{title}</span>
            </Link>
          );
        })}
      </Carousel>
    </div>
  );
}
