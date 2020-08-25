import React from "react";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import BtnBack from "../components/BtnBack";
import d3 from "../assets/images/about/d3.png";
import ArtistHeader from "../components/ArtistHeader";
import {
  paddingH37,
  flexcolumnstretch,
  marginH10,
  flexcolumn,
  paddingH17,
} from "../components/styles";
import Arrow from "../components/Arrow";
import { useHistory } from "react-router-dom";
import Darkroom from "../assets/svg/Darkroom";
const bgContainer = css`
  background-color: #afafaf;
  height: 100vh;
  color: #ffffff;
  position: relative;
  font-family: BauerGroteskOTW03;
`;
const bgM = css`
  font-family: BauerGroteskOTW03;
  background-color: #afafaf;
  color: #ffffff;
  position: relative;
`;
const twoColumns = css`
  ${paddingH37}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;
  height: calc(100% - 79px);
  position: relative;
`;
const mobileContainer = css`
  ${paddingH17}
  ${flexcolumn}
`;
const h1Style = (isDesktop = false) => css`
  margin-top: ${isDesktop ? 35 : 14}px;
  margin-bottom: 20px;
  font-size: 23px;
  line-height: 1.17;
  padding-bottom: 6px;
  border-bottom: 1px solid #ffffff;
  text-align: center;
`;
const h2Style = css`
  font-size: 20px;
  line-height: 1.25;
  text-align: center;
  margin-bottom: 25px;
  margin-bottom: 8px;
  margin-top: 34px;
  text-align: left;
`;
const pStyle = css`
  font-size: 18px;
  line-height: 1.39;
  text-align: left;
`;
const contact = `Phone
+82 2 447 2581
-
Email
D’Ark Room      darkroom@datzpress.com`;
export default function AboutDatzpress() {
  const isDesktop = useDesktop();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const history = useHistory();
  function onLeft() {
    history.push("/about");
  }
  function onRight() {
    history.push("/about");
  }
  return (
    <main className={isDesktop ? bgContainer : bgM}>
      {isDesktop && (
        <div>
          <Arrow
            children={"←"}
            onClick={onLeft}
            className={css`
              color: #ffffff;
              top: 50%;
              transform: translateY(-50%);
              left: 13px;
            `}
          />
          <Arrow
            children={"→"}
            onClick={onRight}
            className={css`
              color: #ffffff;
              top: 50%;
              transform: translateY(-50%);
              right: 13px;
            `}
          />
        </div>
      )}
      <ArtistHeader sticky />
      <div className={isDesktop ? twoColumns : mobileContainer}>
        <div
          className={css`
            height: ${isDesktop ? "calc(100% - 37px)" : "588px"};
            background-image: url(${d3});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            position: relative;
          `}
        >
          <Darkroom
            color="#fff"
            className={css`
              bottom: 29px;
              left: 32px;
              position: absolute;
            `}
          />
        </div>
        <div
          className={css`
            ${flexcolumnstretch}
            ${marginH10}
          `}
        >
          <div
            className={css`
              flex: 1;
            `}
          >
            <h1 className={h1Style(isDesktop)}>D’Ark Room</h1>

            <p className={pStyle}>
              D’ark Room is a project space for showcasing photographs and
              books. We hosts lectures, artist talks, and portfolio reviews in
              collaboration with various artist. Archive Room has over 1,000
              photo books and offers a reading room for artists documentaries
              and DVDs.
            </p>
            <h2 className={h2Style}>D’Front Space</h2>
            <p className={pStyle}>
              D’Front Space is a gallery space that naturally connects to D’Ark
              Room and invites and welcomes the outside gaze. It displays
              various projects underway at D’ARK ROOM, and is a 12.65 m² area
              featuring a show window exposed outside.
            </p>
          </div>
          <div>
            <h2
              className={css`
                margin-top: ${isDesktop ? 30 : 73}px;
                font-size: 17px;
                line-height: 1.24;
                text-align: center;
                padding-bottom: 6px;
                border-bottom: 1px solid #ffffff;
              `}
            >
              CONTACT
            </h2>
            <p
              className={css`
                ${pStyle}
                margin-top: 18px;
                text-align: center;
                white-space: break-spaces;
                margin-bottom: 42px;
              `}
            >
              {contact}
            </p>
            <BtnBack dark full borderTop />
          </div>
        </div>
      </div>
    </main>
  );
}
