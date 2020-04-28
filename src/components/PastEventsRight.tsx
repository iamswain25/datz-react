import React from "react";
import { css } from "emotion";
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
export default () => {
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
        `}
      >
        During 2019, Datz Museum of Art organized three exhibitions based on the
        theme of pluralistic space. Starting with a poetic space made by
        combining text and image (Image Poetics), followed by a painterly space
        where the texture of abstraction became the temperature of lyricism and
        narrative.
      </p>
      <div
        className={css`
          height: 0;
          border-bottom: solid 1px #707070;
          margin-top: 20px;
          margin-bottom: 20px;
        `}
      ></div>
      <section
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
      </section>
      <div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding-top: 10px;
            padding-bottom: 10px;
          `}
        >
          <div className={headerStyle}>
            <button
              className={css`
                ${headerStyle};
                margin-right: 13px;
              `}
            >
              ←
            </button>
            <button
              className={css`
                ${headerStyle};
                margin-left: 13px;
              `}
            >
              →
            </button>
          </div>
          <div className={headerStyle}>Upcoming Events/News</div>
        </div>
        <div
          className={css`
            height: 0;
            border-bottom: solid 1px #707070;
            margin-bottom: 20px;
          `}
        ></div>
      </div>
    </>
  );
};
