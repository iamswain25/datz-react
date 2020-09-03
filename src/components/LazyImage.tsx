import React from "react";
import { css } from "emotion";
import { makeUrl } from "../config/url";
import { LazyImage as LI } from "react-lazy-images";
const classes = {
  placeholder: css`
    background-color: #fff;
    min-width: 280px;
    min-height: 280px;
  `,
  img: css`
    object-fit: contain;
    width: 280px;
    height: 280px;
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
