import React from "react";
import { css } from "emotion";
import { DEFAULT_LAZY_IMAGE_COLOR } from "../config/params";
import useStorage from "./useStorage";
const classes = {
  img: css`
    position: absolute;
    left:0;
    top:0;
    width: 100%;
    height: 100%;
    background-color: ${DEFAULT_LAZY_IMAGE_COLOR};
  `,
};
export default function StorageDivImg({
  path = "",
  img = classes.img,
}) {
  const image = useStorage(path);
  if (!image) return <div className={img} />;
  return <div className={css`
    ${classes.img}
    ${img}
    background-image: url(${image}); 
    background-repeat: no-repeat;
    background-position: center;
  `} />;
}
