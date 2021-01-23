import React from "react";
import { css } from "emotion";
import { DEFAULT_LAZY_IMAGE_COLOR } from "../config/params";
import useStorage from "./useStorage";
const classes = {
  img: css`
    object-fit: contain;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: ${DEFAULT_LAZY_IMAGE_COLOR};
  `,
};
export default function StorageImage({ path = "", img = "" }) {
  const image = useStorage(path);
  if (!image)
    return (
      <div
        className={css`
          ${classes.img} ${img}
        `}
      />
    );
  return (
    <div
      className={css`
        ${classes.img} ${img}
        background-image: url(${image});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        cursor: pointer;
      `}
    />
  );
}
