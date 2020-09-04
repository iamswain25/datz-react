import React from "react";
import { css } from "emotion";
import { bottomBtn37 } from "./styles";
import { makeUrl } from "../config/url";
import { LazyImage } from "react-lazy-images";
import { Link, useParams } from "react-router-dom";
// import Logo from "./Logo";
const classes = {
  link: css`
    padding-left: 18px;
    padding-right: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #707070;
    text-align: center;
  `,
  placeholder: css`
    background-color: #ececec;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #ececec;
    top: 0;
  `,
  img: css`
    cursor: pointer;
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
  `,
};
export default function ItemPhotosRight({
  images,
  type = "publication",
  logo = "D'Ark Room",
}: {
  images: string[];
  type?: string;
  logo?: string;
}) {
  const { address } = useParams();
  return (
    <>
      <section
        className={css`
          flex: 1;
        `}
      >
        {images.map((src, i) => {
          return (
            <Link to={`/${type}/${address}/images/${i}`} key={i}>
              <div
                className={css`
                  position: relative;
                  background-color: #ececec;
                  margin-bottom: ${images.length - 1 === i ? 0 : 28}px;
                  ::before {
                    content: "";
                    display: inline-block;
                    padding-bottom: 60.98%;
                    vertical-align: top;
                  }
                `}
              >
                <LazyImage
                  alt={`image-${i}`}
                  placeholder={({ ref }) => (
                    <div ref={ref} className={classes.placeholder} />
                  )}
                  src={makeUrl(src)}
                  actual={({ imageProps }) => (
                    <img
                      {...imageProps}
                      alt={imageProps.alt}
                      className={classes.img}
                    />
                  )}
                />
                {/* {i === 0 && (
                  <Logo
                    type={logo}
                    color="#808080"
                    className={css`
                      position: absolute;
                      left: 30px;
                      bottom: 30px;
                    `}
                  />
                )} */}
              </div>
            </Link>
          );
        })}
        <button
          onClick={(e) =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className={bottomBtn37}
        >
          Top {">"}
        </button>
      </section>
    </>
  );
}
