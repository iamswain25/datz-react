import React from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import CarouselBtnGroup from "./CarouselBtnGroup";
import Carousel from "react-multi-carousel";
import useNews from "../utils/useNews";
import LazyImage from "./LazyImage";
import { DEFAULT_COUNT } from "../config/params";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { firestore } from "../config/firebase";

const textClass = (dark = false) => css`
  font-family: datz-medium;
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
  const [items] = useCollectionDataOnce<any>(
    firestore
      .collection("news")
      .where("public", "==", true)
      .orderBy("order", "desc")
      .limit(DEFAULT_COUNT),
    { idField: "id" }
  );
  const list = useNews(items);
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
        {list?.map((item, i) => {
          return (
            <Link
              key={item.id + i}
              className={afterClass(i)}
              to={`/news/${item.id}`}
            >
              <div className={listClass(dark)}>
                <LazyImage
                  alt={item.title}
                  link={item.image_cover}
                  placeholder={css`
                    position: absolute;
                  `}
                  img={css`
                    position: absolute;
                    object-fit: cover;
                    left: 0;
                  `}
                />
              </div>
            </Link>
          );
        }) || []}
      </Carousel>
    </div>
  );
}
