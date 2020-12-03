import React from "react";
import { css } from "emotion";
import { DEFAULT_LAZY_IMAGE_COLOR } from "../config/params";
import useStorage from "./useStorage";
const classes = {
  img: css`
    object-fit: contain;
    width: 100%;
    height: 100%;
    background-color: ${DEFAULT_LAZY_IMAGE_COLOR};
  `,
};
export default function StorageImage({
  alt = "title",
  path = "",
  img = classes.img,
}) {
  const image = useStorage(path);
  if (!image) return <div className={img} />;
  return <img alt={alt} src={image} className={img} />;
}
