import React from "react";
import { css } from "emotion";
import { LazyImage as LI } from "react-lazy-images";
import { DEFAULT_LAZY_IMAGE_COLOR } from "../config/params";
import useStorage from "./useStorage";
const classes = {
  placeholder: css`
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${DEFAULT_LAZY_IMAGE_COLOR};
  `,
  img: css`
    top: 0;
    object-fit: contain;
    width: 100%;
    height: 100%;
  `,
};
export default function LazyImage({
  alt = "title",
  link = "",
  placeholder = "",
  img = "",
}) {
  const image = useStorage(link);
  if (!image) return <div className={placeholder} />;
  return (
    <LI
      alt={alt}
      placeholder={({ ref }) => (
        <div
          ref={ref}
          className={css`
            ${classes.placeholder}
            ${placeholder}
          `}
        />
      )}
      src={image}
      actual={({ imageProps: { src } }) => (
        <div
          className={css`
            ${classes.img}
            ${img}
            background-image: url(${src});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            cursor: pointer;
          `}
        />
      )}
    />
  );
}
