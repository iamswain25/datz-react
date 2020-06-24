import React from "react";
import { css } from "emotion";
import CarouselBtnGroup from "./CarouselBtnGroup";
import w1 from "../assets/images/readmore/w1.png";
import w2 from "../assets/images/readmore/w2.png";
import w3 from "../assets/images/readmore/w3.png";
import ev1 from "../assets/images/readmore/ev1.png";
import { useHistory } from "react-router-dom";
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
  object-fit: cover;
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
const list = [
  [w1, "Night Garden"],
  [w2, "Magazine Gitz vol.10"],
  [w3, "Nothing Will Ever be the …"],
  [ev1, "ev1"],
  [w2, "Magazine Gitz vol.10"],
  [w3, "Nothing Will Ever be the …"],
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
    </>
  );
}
