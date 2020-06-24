import React from "react";
import { css } from "emotion";
import ex1 from "../assets/images/readmore/ex1.png";
import ex2 from "../assets/images/readmore/ex2.png";
import { useHistory } from "react-router-dom";
import CarouselBtnGroup from "./CarouselBtnGroup";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
  padding-left: 4px;
  padding-right: 4px;
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
    items: 2,
    // partialVisibilityGutter: 10,
  },
  mobile: {
    breakpoint: { max: 999, min: 0 },
    items: 2,
    // partialVisibilityGutter: 10,
  },
};
const list = [
  [ex1, "Book of Lights"],
  [ex2, "Synesthesia : The Space Between"],
  [ex1, "Book of Lights"],
  [ex2, "Synesthesia : The Space Between"],
  [ex1, "Book of Lights"],
  [ex2, "Synesthesia : The Space Between"],
];
export default function PublicationWidget({
  dark = false,
}: {
  dark?: boolean;
}) {
  const history = useHistory();
  function clickHandler() {
    history.push("/publication/nothingwill");
  }
  return (
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
            <div className={textClass(dark)}>Exhibition</div>
          </CarouselBtnGroup>
        }
      >
        {list.map(([img, title], i) => {
          return (
            <div key={i} className={afterClass(i)} onClick={clickHandler}>
              <div className={listClass(dark)}>
                <img src={img} alt="books" className={imgClass} />
                <span className={descClass(dark)}>{title}</span>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
