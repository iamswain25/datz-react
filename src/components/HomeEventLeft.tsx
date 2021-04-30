import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import Logo from "./Logo";
import CarouselBtnGroup from "./CarouselBtnGroup";
import Carousel from "react-multi-carousel";
import { DEFAULT_LAZY_IMAGE_COLOR } from "../config/params";
import useStorage from "./useStorage";
import useLang from "./useLang";
import Link from "./Link";
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
export default function HomeEventLeft({ items }: { items: any[] }) {
  const isDesktop = useDesktop();
  const [classes, en] = useLang("ebgaramond");
  const typeClass = css`
    font-family: datz-medium;
    font-size: ${isDesktop ? 19 : 16}px;
    line-height: ${isDesktop ? 1.21 : 1.19};
    text-align: center;
    margin-top: ${isDesktop ? 0 : 5}px auto 0;
  `;
  const titleClass = classes.title(
    isDesktop ? 27 : 22,
    1.36,
    css`
      max-width: 555px;
      overflow: hidden;
      letter-spacing: ${isDesktop ? 0.54 : 0.44}px;
      margin: ${en ? 0 : 1}px auto 0;
    `
  );
  const authorClass = classes.title(
    isDesktop ? 21 : 20,
    1.4,
    css`
      letter-spacing: 0.4px;
      margin-top: ${isDesktop ? 4 : 3}px;
    `
  );
  return (
    <section
      className={css`
        display: flex;
        flex-direction: column;
        margin-right: ${isDesktop ? 14 : 0}px;
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
            const { color = "#fff" } = item;
            return (
              <div
                key={item.id + i}
                className={css`
                  background-color: ${DEFAULT_LAZY_IMAGE_COLOR};
                  flex: 1;
                `}
              >
                <Sub image={item.image}>
                  <Link
                    to={item.url || ""}
                    className={css`
                      text-align: center;
                      color: ${color};
                      flex: 1;
                    `}
                  >
                    <p className={typeClass}>{item.type}</p>
                    <hr
                      className={css`
                        height: 0;
                        max-width: 555px;
                        text-align: center;
                        border-top: solid 1px ${color};
                        margin: ${isDesktop ? 8 : 3}px auto
                          ${isDesktop ? 18 : 16}px;
                      `}
                    />
                    <p className={titleClass}>{item.title}</p>
                    <p className={authorClass}>{item.text}</p>
                  </Link>
                </Sub>
                <Logo type={item.logo} color={color} absolute noPadding />
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}

function Sub({ children, image }: React.PropsWithChildren<{ image: string }>) {
  const img = useStorage(image);
  return (
    <div
      className={css`
        background-image: url(${img});
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
      {children}
    </div>
  );
}
