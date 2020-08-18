import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import PublicationCloseBtn from "./PublicationCloseBtn";
import { paddingH27, marginH27 } from "./styles";
import BtnBack from "./BtnBack";
const stickyContainer = css`
  margin-left: 20px;
  margin-right: 17px;
  font-family: BauerGroteskOTW03;
  display: flex;
  flex-direction: column;
`;
const mobileContainer = css`
  position: relative;
  ${paddingH27}
`;
export default function EventItemRight({ children }: { children?: any }) {
  const isDesktop = useDesktop();
  return (
    <div className={isDesktop ? stickyContainer : undefined}>
      {isDesktop && <PublicationCloseBtn noClose />}
      <div
        className={css`
          display: flex;
          flex-direction: column;
          overflow: hidden;
          flex: 1;
        `}
      >
        <div
          className={css`
            text-align: center;
            color: #707070;
            ${isDesktop ? undefined : mobileContainer}
            margin-bottom: ${isDesktop ? 0 : 17}px;
          `}
        >
          <div
            className={css`
              font-size: 17px;
              border-bottom: solid 1px #707070;
              padding-bottom: 7px;
              margin-bottom: 16px;
            `}
          >
            Artist Talk / Lecture
          </div>
          <div
            className={css`
              font-size: 17px;
              letter-spacing: 0.34px;
            `}
          >
            2019.9.25
          </div>
          <div
            className={css`
              font-size: 14px;
              letter-spacing: 0.28px;
              color: #afafaf;
              height: 36px;
            `}
          >
            The Sue and Edgar Wachenheim III Trustees Room, New York, NY, USA
          </div>
        </div>
        {children}
        <section
          className={
            isDesktop
              ? css`
                  flex: 1;
                `
              : mobileContainer
          }
        >
          <div
            className={css`
              height: 59px;
              font-size: 25px;
              color: #4b4b4b;
              text-align: center;
            `}
          >
            From South Korea to NYPL: Datz Press
          </div>
          <div
            className={css`
              font-size: 18px;
              line-height: 1.5;
              text-align: left;
              color: #4b4b4b;
              padding-bottom: 49px;
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
          </div>
        </section>
        <div
          className={css`
            ${isDesktop ? undefined : marginH27}
            border-top: solid 1px #707070;
            text-align: center;
            margin-bottom: ${isDesktop ? 37 : 0}px;
          `}
        >
          {!isDesktop && <BtnBack />}
        </div>
      </div>
    </div>
  );
}
