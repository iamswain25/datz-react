import React from "react";
import { css } from "emotion";
import CarouselBtnGroup from "./CarouselBtnGroup";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import usePublications from "../utils/usePublications";
import { makeUrl } from "../config/url";

const textClass = (dark = false) => css`
  font-family: BauerGroteskOTW03;
  font-size: 16px;
  line-height: 1.19;
  text-align: right;
  color: ${dark ? "#ffffff" : "#707070"};
`;
const descClass = (dark = false) => css`
  font-family: BauerGroteskOTW03;
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
  display: flex;
  flex-direction: column;
  align-items: stretch;
  cursor: pointer;
  flex: 1;
  color: ${dark ? "#ffffff" : "#707070"};
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
`;
const afterClass = (i: number) => css`
  position: relative;
  width: 100%;
  ::before {
    content: "";
    height: 86px;
    border-right: solid ${i === 0 ? 0 : 1}px #cccccc;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateX(-1px);
  }
`;
const imgClass = css`
  object-fit: contain;
  width: 100%;
`;
const itemClass = css`
  display: flex;
  align-items: center;
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1000 },
    items: 3,
    // partialVisibilityGutter: 10,
  },
  mobile: {
    breakpoint: { max: 999, min: 0 },
    items: 3,
    // partialVisibilityGutter: 10,
  },
};
export default function PublicationWidget({
  dark = false,
  publications,
}: {
  publications: any[];
  dark?: boolean;
}) {
  const list = usePublications(publications);
  if (!list.length) {
    return null;
  }
  return (
    <>
      <div
        className={css`
          margin-top: 32px;
        `}
      >
        <Carousel
          responsive={responsive}
          containerClass="carousel-container-custom"
          itemClass={itemClass}
          renderButtonGroupOutside={true}
          arrows={false}
          customButtonGroup={
            <CarouselBtnGroup dark={dark}>
              <div className={textClass(dark)}>Publication</div>
            </CarouselBtnGroup>
          }
        >
          {list.map(({ image_cover, title, id }, i) => {
            return (
              <Link key={i} className={afterClass(i)} to={`/publication/${id}`}>
                <div className={listClass(dark)}>
                  <img
                    src={makeUrl(image_cover)}
                    alt="books"
                    className={imgClass}
                  />
                  <span className={descClass(dark)}>{title}</span>
                </div>
              </Link>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
