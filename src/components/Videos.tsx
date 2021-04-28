import React from "react";
import { css } from "emotion";
import ReactPlayer from "react-player";
const classes = {
  placeholder: css`
    background-color: #ececec;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #ececec;
    top: 0;
  `,
};
interface Video {
  url: string;
  playing: boolean;
  controls: boolean;
  loop: boolean;
}
export default function Videos({ arr }: { arr: (Video | string)[] }) {
  const videos = arr.filter((_) => _);
  return (
    <>
      {videos?.map((v) => {
        if (typeof v === "string") {
          return (
            <div
              key={v}
              className={css`
                position: relative;
                margin-bottom: 28px;
              `}
              dangerouslySetInnerHTML={{ __html: v }}
            />
          );
        }
        return (
          <div
            key={`key-${v?.url}`}
            className={css`
              position: relative;
              margin-bottom: 28px;
              ::before {
                content: "";
                display: inline-block;
                padding-bottom: 60.98%;
                vertical-align: top;
              }
            `}
          >
            <ReactPlayer
              {...v}
              width="100%"
              height="100%"
              className={classes.placeholder}
            />
          </div>
        );
      })}
    </>
  );
}
