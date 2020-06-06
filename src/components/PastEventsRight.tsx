import React from "react";
import { css } from "emotion";
import ArrowHorizontal from "./ArrowHorizontal";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
const headerStyle = css`
  font-family: BauerGroteskOTW03;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: right;
  color: #707070;
`;
export default function PastEventsRight() {
  const isDeskTop = useMediaQuery({ minWidth: 1000 });
  return (
    <>
      <img
        src={require("../assets/images/event1.jpg")}
        alt="ok"
        className={css`
          object-fit: contain;
          width: 100%;
        `}
      />
      <div
        className={
          isDeskTop
            ? css`
                flex: 1;
                display: flex;
                flex-direction: column;
              `
            : css`
                padding: 27px;
              `
        }
      >
        <div
          className={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding-top: 10px;
            padding-bottom: 10px;
          `}
        >
          <div className={headerStyle}>Sep 25, 2019</div>
          <div className={headerStyle}>Past Events/Reveiws</div>
        </div>
        <p
          className={css`
            font-family: BauerGroteskOTW03;
            font-size: 22px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.23;
            letter-spacing: normal;
            text-align: center;
            color: #4b4b4b;
          `}
        >
          From South Korea to NYPL: Datz Press
        </p>
        <p
          className={css`
            font-family: BauerGroteskOTW03;
            font-size: 17px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.47;
            letter-spacing: normal;
            text-align: left;
            color: #4b4b4b;
            flex: 1;
          `}
        >
          During 2019, Datz Museum of Art organized three exhibitions based on
          the theme of pluralistic space. Starting with a poetic space made by
          combining text and image (Image Poetics), followed by a painterly
          space where the texture of abstraction became the temperature of
          lyricism and narrative.
        </p>
        <Link
          to="/event"
          className={css`
            border-bottom: solid 1px #707070;
            margin-top: 20px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            text-align: center;
            font-family: BauerGroteskOTW03;
            font-size: 14px;
            line-height: 1.21;
            color: #707070;
          `}
        >
          read more >
        </Link>
        <section>
          <div
            className={css`
              flex-direction: row;
              display: flex;
            `}
          >
            <div
              className={css`
                flex: 1;
                margin-right: 5px;
                background-image: url(${require("../assets/images/event2.jpg")});
                height: 190px;
              `}
            ></div>
            <div
              className={css`
                flex: 1;
                margin-left: 5px;
                background-image: url(${require("../assets/images/event3.jpg")});
                height: 190px;
              `}
            ></div>
          </div>
          <ArrowHorizontal>
            <div className={headerStyle}>Upcoming Events/News</div>
          </ArrowHorizontal>
        </section>
      </div>
    </>
  );
}
