import React from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import UpcomingWidget from "./UpcomingWidget";
const headerStyle = css`
  font-family: BauerGroteskOTW03;
  font-size: 16px;
  line-height: 1.19;
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
                overflow: hidden;
                padding-left: 17px;
                padding-right: 17px;
              `
            : css`
                flex: 1;
                display: flex;
                flex-direction: column;
                padding-left: 27px;
                padding-right: 27px;
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
            padding-left: 17px;
            padding-right: 17px;
          `}
        >
          <div className={headerStyle}>Sep 25, 2019</div>
          <div className={headerStyle}>Past Events/Reveiws</div>
        </div>
        <div
          className={css`
            overflow: hidden;
            flex: 1;
            padding-left: 17px;
            padding-right: 17px;
          `}
        >
          <p
            className={css`
              font-family: BauerGroteskOTW03;
              font-size: 20px;
              line-height: 1.35;
              text-align: center;
              color: #4b4b4b;
            `}
          >
            From South Korea to NYPL: Datz Press
          </p>
          <p
            className={css`
              font-family: BauerGroteskOTW03;
              font-size: 19px;
              line-height: 1.42;
              text-align: left;
              color: #4b4b4b;
              margin-top: 10px;
              max-height: 311px;
            `}
          >
            “ Datz Press understands and responds sensitively to what an artist
            is trying to imply, making it near perfection through a delicate
            process. The only publisher that can fully digest the spirit of my
            work for 30 years and deliver all of my photos is the Datz Press.”
            -Lonnie Graham The New York Public Library (NYPL), one of the
            world’s four largest libraries, decided to own the entire
            publication of Datz Press and hosted the lecture on September 25
            under the title From South Korea to NYPL: Datz Press. Sangyon Joo,
            the head of Datz Press and Datz Museum of Art, along with three
            artist, Amanda Marchand (photographer/writer), Minny Lee
            (photographer/ poet), and Lonnie Graham (photographer/professor at
            Pennsylvania State University). The lecture, which began with the
            greeting of Sangyon Joo, described the establishment background of
            Datz Museum of Art and Datz Press, the space that embodies the
            merits of exhibitions and books in an effective way, introduced the
            project space D’arkroom, where the space that communicates with the
            public. Amanda Marchand, Minny Lee and Lonnie Graham had time to
            introduce their books that collaborated with Datz Press. Marchand,
            who recently published Nothing Will Ever be the Same Again,shared
            her two-week stay at Datz Museum of Art. Minny Lee then showed how
            Datz Press sensibly arranged her words and images on the page in
            Million Years. Lonnie Graham, who spent more than 30 years
            conducting A Conversation with the World, asked common questions and
            took pictures of people in six continents and 50 countries, shared
            the story of his process of his book. The lecture is the significant
            event to introduce Datz Press to book lovers and the sponsors of the
            public library, with the New York Public Library’s collection which
            Datz Press’ publications are included.
          </p>
        </div>

        <Link
          to="/publication"
          className={css`
            height: 17px;
            border-bottom: solid 1px #707070;
            padding-top: 10px;
            padding-bottom: 10px;
            text-align: center;
            font-family: BauerGroteskOTW03;
            font-size: 14px;
            line-height: 1.21;
            color: #707070;
            margin-left: 17px;
            margin-right: 17px;
          `}
        >
          read more {">"}
        </Link>
      </div>
      <div
        className={
          isDeskTop
            ? ""
            : css`
                padding-left: 27px;
                padding-right: 27px;
              `
        }
      >
        <UpcomingWidget />
      </div>
    </>
  );
}
