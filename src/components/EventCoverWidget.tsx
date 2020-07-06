import React from "react";
import { css } from "emotion";
import half from "../assets/images/legacy/half.jpg";
import { useHistory } from "react-router-dom";
import CarouselBtnGroup from "./CarouselBtnGroup";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const listClass = (dark = false) => css`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  cursor: pointer;
  flex: 1;
  color: ${dark ? "#ffffff" : "#707070"};
  // padding-left: 4px;
  // padding-right: 4px;
  width: 100%;
`;
const afterClass = (i: number) => css`
  position: relative;
  width: 100%;
`;
const imgClass = css`
  object-fit: cover;
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
const list = [[half], [half], [half], [half]];
export default function EventCoverWidget({ dark = false }: { dark?: boolean }) {
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
      `}`}
    >
      <Carousel
        responsive={responsive}
        containerClass="carousel-container-custom"
        itemClass={itemClass}
        renderButtonGroupOutside={true}
        arrows={false}
        customButtonGroup={<CarouselBtnGroup dark={dark}></CarouselBtnGroup>}
      >
        {list.map(([img], i) => {
          return (
            <div key={i} className={afterClass(i)} onClick={clickHandler}>
              <div className={listClass(dark)}>
                <img src={img} alt="event" className={imgClass} />
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
