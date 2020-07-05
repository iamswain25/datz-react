import React from "react";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import BtnBack from "../components/BtnBack";
import datzpressPng from "../assets/images/about/datzpress.png";
import ArtistHeader from "../components/ArtistHeader";
import { paddingH37, flexcolumnstretch, marginH10 } from "../components/styles";
import Datzpress from "../assets/svg/Datzpress";
import Arrow from "../components/Arrow";
import { useHistory } from "react-router-dom";
const bgContainer = css`
  background-color: #afafaf;
  height: 100vh;
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
const h1Style = css`
  margin-top: 35px;
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
Enquiry      datzpress@datzpress.com
Datz Books      books@datzpress.com`;
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
    <main className={bgContainer}>
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
      <ArtistHeader fixed />
      <div className={twoColumns}>
        <div
          className={css`
            height: calc(100% - 37px);
            background-image: url(${datzpressPng});
            background-repeat: no-repeat;
            background-size: cover;
            position: relative;
          `}
        >
          <Datzpress
            color="#afafaf"
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
            <h1 className={h1Style}>Datz Press</h1>

            <p className={pStyle}>
              Datz Press is an art book press that works with photographers,
              designers, and bookmakers. We create, publish, and exhibit books
              centered on photography. We advocates for the growth of
              participatory artistic activity through exhibiting and publishing
              art, as well as art education.
            </p>
            <h2 className={h2Style}>Datz Books</h2>
            <p className={pStyle}>
              Datz Books is a bookmaking studio. We collaborate with artists who
              want to create artist books. We suggest appropriate designs,
              materials, and binding procedures and complete a book. We assure
              an excellent book through a direct management of the whole
              delicate process handcrafted to perfection.
            </p>
          </div>
          <div>
            <h2
              className={css`
                margin-top: 30px;
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
