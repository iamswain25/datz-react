import React from "react";
import { css } from "emotion";
import { LazyImage as LI } from "react-lazy-images";
import { DEFAULT_LAZY_IMAGE_COLOR } from "../config/params";
import useStorage from "./useStorage";
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
  const image = useStorage(link);
  if (!image) return <div className={placeholder} />;
  return (
    <LI
      alt={alt}
      placeholder={({ imageProps, ref }) => (
        <div ref={ref} className={placeholder} />
      )}
      src={image}
      actual={({ imageProps }) => (
        <img {...imageProps} alt={imageProps.alt} className={img} />
      )}
    />
  );
}
