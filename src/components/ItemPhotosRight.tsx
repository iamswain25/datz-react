import React from "react";
import Datzpress from "../assets/svg/Datzpress";
import { css } from "emotion";
import { bottomBtn37 } from "./styles";
import { makeUrl } from "../config/url";
import { LazyImage } from "react-lazy-images";
import { Link, useParams } from "react-router-dom";
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
    background-color: lightgrey;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: lightgrey;
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
}: {
  images: string[];
  type?: string;
}) {
  const { id } = useParams();
  return (
    <>
      <section
        className={css`
          flex: 1;
        `}
      >
        {images.map((src, i) => {
          return (
            <Link to={`/${type}/${id}/images/${i}`} key={i}>
              <div
                className={css`
                  position: relative;
                  background-color: lightgrey;
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
                {i === 0 && (
                  <Datzpress
                    color="#808080"
                    className={css`
                      position: absolute;
                      left: 30px;
                      bottom: 30px;
                    `}
                  />
                )}
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
