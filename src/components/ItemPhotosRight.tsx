import React from "react";
import { css } from "emotion";
import { bottomBtn37 } from "./styles";
import { Link, useLocation } from "react-router-dom";
import LazyImage from "./LazyImage";
import Videos from "./Videos";
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
interface Video {
  url: string;
  playing: boolean;
  controls: boolean;
  loop: boolean;
}
export default function ItemPhotosRight({
  item,
  type = "publication",
}: {
  item: any;
  type?: string;
}) {
  const location = useLocation<{ index: number }>();
  const refs = React.useRef<any>();
  const index = location?.state?.index;
  if (!item) return null;
  const { images, id, videos } = item as {
    images: string[];
    id: string;
    videos: (Video | string)[];
  };
  return (
    <>
      <section
        ref={refs}
        className={css`
          flex: 1;
        `}
      >
        <Videos arr={videos} />
        {images?.map((src, i) => {
          return (
            <Link
              to={{
                pathname: `/${type}/${id}/images`,
                state: { index: i },
              }}
              key={src}
              replace
            >
              <div
                ref={(r) => {
                  if (index === i) {
                    r?.scrollIntoView({ behavior: "auto", block: "center" });
                  }
                }}
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
          Top &gt;
        </button>
      </section>
    </>
  );
}
