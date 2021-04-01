import React from "react";
import { css } from "emotion";
import CarouselBtnGroup from "./CarouselBtnGroup";
import Carousel from "react-multi-carousel";
import useDesktop from "./useDesktop";
import { Link, useLocation } from "react-router-dom";
import useParams from "./useParams";
import StorageImage from "./StorageImage";
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
  const { state } = useLocation<{ index: number }>();
  const index = state?.index || 0;
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
        sliderClass={css`
          height: 100%;
        `}
        containerClass={css`
          height: 100%;
        `}
        ref={(r) => {
          r?.goToSlide(index);
        }}
        itemClass={css`
          height: 100%;
        `}
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
    <Link to={{ pathname: `/${type}/${id}/images`, state: { index } }} replace>
      <StorageImage
        path={image}
        img={css`
          color: ${dark ? "#ffffff" : "#707070"};
          min-height: 250px;
        `}
      />
    </Link>
  );
}
