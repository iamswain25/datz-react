import React from "react";
import { css } from "emotion";
import { makeUrl } from "../config/url";
import { LazyImage as LI } from "react-lazy-images";
import { DEFAULT_LAZY_IMAGE_COLOR } from "../config/params";
const classes = {
  placeholder: css`
    width: 100%;
    height: 100%;
    background-color: ${DEFAULT_LAZY_IMAGE_COLOR};
  `,
  img: css`
    object-fit: contain;
    width: 100%;
    height: 100%;
  `,
};
export default function LazyImage({
  alt = "title",
  link = "",
  placeholder = classes.placeholder,
  img = classes.img,
}) {
  return (
    <LI
      alt={alt}
      placeholder={({ imageProps, ref }) => (
        <div ref={ref} className={placeholder} />
      )}
      src={makeUrl(link)}
      actual={({ imageProps }) => (
        <img {...imageProps} alt={imageProps.alt} className={img} />
      )}
    />
  );
}
