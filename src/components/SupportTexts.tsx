import React from "react";
import { css } from "emotion";
import { paddingH55, paddingH27 } from "./styles";
import useDesktop from "./useDesktop";
export default function SupportTexts() {
  const isDesktop = useDesktop();
  return (
    <div
      className={css`
        height: 100%;
        width: 100%;
        position: absolute;
        font-family: BauerGroteskOTW03;
        font-size: 16px;
        line-height: 1.19;
        text-align: center;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
        top: 0;
        ${isDesktop ? paddingH55 : paddingH27}
      `}
    >
      <div
        className={css`
          margin-top: ${isDesktop ? 111 : 111}px;
          flex: 1;
          width: 100%;
        `}
      >
        <div
          className={css`
            font-size: 23px;
            line-height: 1.17;
          `}
        >
          Datz Membership
        </div>
        <hr
          className={css`
            margin-top: 5px;
            border-top-color: white;
            border-style: solid;
          `}
        />
        <div
          className={css`
            margin-top: 12px;
          `}
        >
          <a
            href="membership"
            className={css`
              text-decoration: underline;
            `}
          >
            Become a Member {">"}
          </a>
          <div
            className={css`
              margin-top: 15px;
            `}
          >
            By becoming a Datz supporter, you allow Datz to continue to grow
          </div>
          <div>and flourish by showcasing the art of today and tomorrow.</div>
        </div>
      </div>
      <div
        className={css`
          margin-bottom: 93px;
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <div
          className={css`
            margin-top: 34px;
          `}
        >
          This membership is an annual membership for the integration of anchor
          press and anchor art museum.
          <br />
          <br />
          Based on our expertise in the field of visual arts, we shared “Random
          Actions of Art Kindness” and gathered together to restore the true,
          good, and beautiful natural functions of art in our lives. I want to
          grow into a healthy tree that takes root in life by making art into
          creation, research, exhibition, publishing, and education. Your
          sponsorship serves as a foundation for planning exhibitions and
          providing more opportunities for young artists, as well as funding for
          children and youth education programs.
        </div>
        <div
          className={css`
            margin-top: 27px;
          `}
        >
          <a
            href="membership"
            className={css`
              text-decoration: underline;
              font-size: 23px;
              line-height: 1.22;
            `}
          >
            Become a Member {">"}
          </a>
        </div>
      </div>
    </div>
  );
}
