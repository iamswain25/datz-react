import React from "react";
import { css } from "emotion";
import { bottomBtn37 } from "./styles";
import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";
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
  item,
  type = "publication",
  logo = "D'Ark Room",
}: {
  item: any;
  type?: string;
  logo?: string;
}) {
  if (!item) return null;
  const { images, id } = item as { images: string[]; id: string };
  return (
    <>
      <section
        className={css`
          flex: 1;
        `}
      >
        {images?.map((src, i) => {
          return (
            <Link to={`/${type}/${id}/images/${i}`} key={i} replace>
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
                  placeholder={classes.placeholder}
                  link={src}
                  img={classes.img}
                />
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
