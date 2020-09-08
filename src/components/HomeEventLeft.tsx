import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import Logo from "./Logo";
import useBanners from "../utils/useBanners";
import CarouselBtnGroup from "./CarouselBtnGroup";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import { makeUrl } from "../config/url";
import { DEFAULT_LAZY_IMAGE_COLOR } from "../config/params";
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
export default function HomeEventLeft() {
  const isDesktop = useDesktop(false);
  const items = useBanners("home", "Past Event");
  const typeClass = css`
    font-family: BauerGroteskOTW03;
    font-size: ${isDesktop ? 19 : 16}px;
    line-height: ${isDesktop ? 1.21 : 1.19};
    text-align: center;
    margin-top: ${isDesktop ? 0 : 5}px;
  `;
  const titleClass = css`
    font-family: ArnoPro-Subhead;
    font-size: ${isDesktop ? 27 : 22}px;
    line-height: ${isDesktop ? 1.37 : 1.36};
    letter-spacing: ${isDesktop ? 0.54 : 0.44}px;
    text-align: center;
    height: 32px;
    overflow: hidden;
  `;
  const authorClass = css`
    font-family: ArnoPro-Display;
    font-size: ${isDesktop ? 21 : 20}px;
    line-height: ${isDesktop ? 1.38 : 1.4};
    letter-spacing: ${isDesktop ? 0.42 : 0.4}px;
    text-align: center;
    margin-top: ${isDesktop ? 4 : 3}px;
  `;
  return (
    <section
      className={css`
        display: flex;
        flex-direction: column;
        margin-right: 14px;
        width: ${isDesktop ? "calc(50% - 14px)" : "100%"};
        position: relative;
      `}
    >
      <div
        className={`height ${css`
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        `}`}
      >
        <Carousel
          responsive={responsive}
          containerClass={css`
            flex: 1;
            align-items: normal;
          `}
          itemClass={css`
            display: flex;
            align-items: center;
          `}
          renderButtonGroupOutside={true}
          arrows={false}
          customButtonGroup={<CarouselBtnGroup noBorderBottom={!isDesktop} />}
        >
          {items.map((item, i) => {
            return (
              <div
                key={i}
                className={css`
                  background-color: ${DEFAULT_LAZY_IMAGE_COLOR};
                  flex: 1;
                `}
              >
                <div
                  className={css`
                    background-image: url(${makeUrl(item.image)});
                    background-position: center;
                    background-size: cover;
                    color: #707070;
                    display: flex;
                    flex-direction: column;
                    align-items: stretch;
                    justify-content: space-between;
                    padding: 37px 17px;
                    position: relative;
                  `}
                >
                  <Link
                    to={item.url || ""}
                    className={css`
                      text-align: center;
                      color: #ffffff;
                    `}
                  >
                    <p className={typeClass}>{item.type}</p>
                    <hr
                      className={css`
                        height: 0;
                        border-top: solid 1px #ffffff;
                        margin-top: ${isDesktop ? 8 : 3}px;
                        margin-bottom: ${isDesktop ? 18 : 16}px;
                      `}
                    />
                    <p className={titleClass}>{item.title}</p>
                    <p className={authorClass}>{item.subtitle}</p>
                  </Link>
                  <Logo
                    type={item.logo}
                    color="#ffffff"
                    className={css`
                      position: absolute;
                      left: ${isDesktop ? 23 : 32}px;
                      bottom: ${isDesktop ? 29 : 32}px;
                    `}
                  />
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}
