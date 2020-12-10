import React from "react";
import { css } from "emotion";
import CarouselBtnGroup from "./CarouselBtnGroup";
import Carousel from "react-multi-carousel";
import useDesktop from "./useDesktop";
import { DEFAULT_LAZY_IMAGE_COLOR } from "../config/params";
import { Link, useLocation } from "react-router-dom";
import useParams from "./useParams";
import StorageImage from "./StorageImage";
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
  type = "event",
}: {
  dark?: boolean;
  images: any[];
  type?: "event" | "news";
}) {
  const isDesktop = useDesktop();
  const refs = React.useRef<any>();
  const location = useLocation<{ index: number }>();
  const index = location?.state?.index ?? 0;
  if (index && refs.current) {
    setTimeout(() => refs.current.goToSlide(index, true), 500);
  }
  return (
    <div
      className={css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
      `}
    >
      <Carousel
        responsive={responsive}
        containerClass={css`
          flex: 1;
          align-items: normal;
        `}
        ref={refs}
        itemClass={itemClass}
        renderButtonGroupOutside={true}
        arrows={false}
        customButtonGroup={
          <CarouselBtnGroup
            dark={dark}
            noBorderBottom={!isDesktop}
            plusMargin={isDesktop ? 0 : 20}
          />
        }
      >
        {images?.map((img, i) => (
          <Sub dark={dark} image={img} type={type} index={i} key={img + i} />
        )) || []}
      </Carousel>
    </div>
  );
}

function Sub({
  dark,
  image,
  type,
  index,
}: {
  dark: boolean;
  image: string;
  type: "event" | "news";
  index: number;
}) {
  const { id } = useParams();
  return (
    <div
      className={css`
        background-color: ${DEFAULT_LAZY_IMAGE_COLOR};
        display: flex;
        flex: 1;
        height: 100%;
      `}
    >
      <Link
        to={`/${type}/${id}/images/${index}`}
        replace
        className={css`
          flex: 1;
          color: ${dark ? "#ffffff" : "#707070"};
        `}
      >
        <StorageImage
          path={image}
          img={css`
            object-fit: cover;
            width: 100%;
            height: 100%;
          `}
        />
      </Link>
    </div>
  );
}
