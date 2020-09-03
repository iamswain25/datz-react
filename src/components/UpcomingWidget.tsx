import React from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import CarouselBtnGroup from "./CarouselBtnGroup";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useNews from "../utils/useNews";
import { news } from "../@type/news";
import LazyImage from "./LazyImage";
import { DEFAULT_COUNT, DEFAULT_LAZY_IMAGE_COLOR } from "../config/params";

const textClass = (dark = false) => css`
  font-family: BauerGroteskOTW03;
  font-size: 16px;
  line-height: 1.19;
  text-align: right;
  color: ${dark ? "#ffffff" : "#707070"};
`;
const listClass = (dark = false) => css`
  color: ${dark ? "#ffffff" : "#707070"};
  position: relative;
  margin: 0 6px;
  ::before {
    content: "";
    display: inline-block;
    padding-bottom: 50.51%;
    vertical-align: top;
  }
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
    items: 2,
    // partialVisibilityGutter: 10,
  },
  mobile: {
    breakpoint: { max: 999, min: 0 },
    items: 2,
    // partialVisibilityGutter: 10,
  },
};
export default function UpcomingWidget({ dark = false }: { dark?: boolean }) {
  const list = useNews(news.slice(0, DEFAULT_COUNT));
  return (
    <div
      className={css`
        margin-top: 10px;
      `}
    >
      <Carousel
        responsive={responsive}
        containerClass={css`
          flex: 1;
          align-items: normal;
        `}
        // sliderClass={css``}
        // additionalTransfrom={-100}
        itemClass={itemClass}
        renderButtonGroupOutside={true}
        arrows={false}
        customButtonGroup={
          <CarouselBtnGroup dark={dark} plusMargin={6}>
            <div className={textClass(dark)}>Upcoming Events/News</div>
          </CarouselBtnGroup>
        }
      >
        {list.map((item, i) => {
          return (
            <Link key={i} className={afterClass(i)} to={`/newsitem/${item.id}`}>
              <div className={listClass(dark)}>
                <LazyImage
                  alt={item.title}
                  link={item.images[0]}
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
            </Link>
          );
        })}
      </Carousel>
    </div>
  );
}
