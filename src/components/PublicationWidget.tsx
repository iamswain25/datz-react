import React from "react";
import { css } from "emotion";
import CarouselBtnGroup from "./CarouselBtnGroup";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import usePublications from "../utils/usePublications";
import useDesktop from "./useDesktop";
import useDocs from "../utils/useDocs";
import StorageDivImg from "./StorageDivImg";

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
  // margin-top: 10px;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 8px;
  padding-right: 8px;
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
  rel_publications,
}: {
  rel_publications: string[];
  dark?: boolean;
}) {
  const isDesktop = useDesktop();
  const items = useDocs("publication", rel_publications);
  const list = usePublications(items);
  if (!(list && list.length)) {
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
          containerClass={css`
            flex: 1;
            align-items: normal;
          `}
          itemClass={itemClass}
          renderButtonGroupOutside={true}
          arrows={false}
          customButtonGroup={
            <CarouselBtnGroup dark={dark}>
              <div className={textClass(dark)}>Publication</div>
            </CarouselBtnGroup>
          }
        >
          {list.map((item, i) => {
            const { image_cover, title, id } = item;
            return (
              <Link
                key={id}
                to={`/publication/${id}`}
                className={css`
                  display: flex;
                  flex-direction: column;
                  align-items: stretch;
                  padding-left: 4px;
                  padding-right: 4px;
                  flex: 1;
                  position: relative;
                  overflow: hidden;
                `}
              >
                <div
                  className={css`
                    color: ${dark ? "#ffffff" : "#707070"};
                    position: relative;
                    ::before {
                      content: "";
                      height: ${isDesktop ? "86px" : "50%"};
                      border-right: solid ${i === 0 ? 0 : 1}px #cccccc;
                      position: absolute;
                      top: 50%;
                      transform: translateY(-50%) translateX(-1px);
                    }
                  `}
                >
                  <StorageDivImg
                    path={image_cover}
                    img={css`
                      min-height: 170px;
                      min-width: 170px;
                      background-size: contain;
                      position: relative;
                      background-color: transparent;
                    `}
                  />
                </div>
                <span className={descClass(dark)}>{title}</span>
              </Link>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
