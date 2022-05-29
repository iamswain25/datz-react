import React from "react";
import ArtistCloseBtn from "../components/ArtistCloseBtn";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
// import png from "../assets/svg/1015_dfrontspace.png";
import ArtistHeader from "../components/ArtistHeader";
import {
  paddingH37,
  flexcolumnstretch,
  paddingH12,
  flexcolumn,
  paddingH17,
} from "../components/styles";
import Arrow from "../components/Arrow";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
import useLang from "../components/useLang";
import LazyImage from "../components/LazyImage";
import BtnShare from "../components/BtnShare";
// import Dfrontspace from "../assets/svg/Dfrontspace";
import Logo from "../components/Logo";
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";
import { firestore } from "../config/firebase";
import useItem from "../utils/useItem";
import useNavTopHeight from "../components/useNavTopHeight";
const h1Style = (isDesktop = false) => css`
  margin-top: ${isDesktop ? 35 : 14}px;
  margin-bottom: 20px;
  font-size: 23px;
  line-height: 1.17;
  padding-bottom: 6px;
  border-bottom: 1px solid #ffffff;
  text-align: center;
`;
export default function AboutDarkroom() {
  const isDesktop = useDesktop(true);
  const [classes] = useLang("About");
  const [doc] = useDocumentDataOnce(
    firestore.collection("about").doc("D’Ark Room")
  );
  const item = useItem(doc);
  const history = useHistory();
  function onLeft() {
    history.replace("/about/datzpress");
  }
  function onRight() {
    history.replace("/about/datzmuseum");
  }
  const { desktopHeight, desktopHeight16, desktopHeight36 } = useNavTopHeight();

  return (
    <>
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
      <ArtistHeader>
        <ArtistCloseBtn
          title="< back to About"
          to="/about"
          className={css`
            color: #fff;
          `}
        />
      </ArtistHeader>
      <div
        className={css`
          ${isDesktop ? paddingH37 : paddingH17}
          ${flexcolumn}
          position: relative;
          min-height: ${isDesktop ? desktopHeight : "auto"};
          padding-bottom: ${isDesktop ? 16 : 0}px;
        `}
      >
        <Grid container spacing={isDesktop ? 4 : 0}>
          <Grid item xs={12} sm={6}>
            <div
              className={css`
                position: relative;
                overflow: hidden;
                height: ${isDesktop ? desktopHeight36 : "527px"};
                width: 100%;
              `}
            >
              <LazyImage link={item?.image} />
              <Logo color="#fff" type="darkroom" absolute noPadding />
            </div>
          </Grid>
          <Grid container item xs={12} sm={6}>
            {Boolean(item?.text) && (
              <div
                className={css`
                  ${flexcolumnstretch}
                  ${paddingH12}
                  max-height: ${isDesktop ? desktopHeight16 : "auto"};
                  overflow: auto;
                `}
              >
                <div
                  className={css`
                    flex: 1;
                  `}
                >
                  <div
                    className={css`
                      display: flex;
                      align-items: flex-start;
                      margin-bottom: 20px;
                      margin-top: ${isDesktop ? 0 : 20}px;
                    `}
                  >
                    <BtnShare title={item.title} color="#ececec" />
                  </div>
                  <h1 className={h1Style(isDesktop)}>{item.title}</h1>
                  <p className={classes.desc}>{item.text}</p>
                  {/* <Dfrontspace
                    color="#fff"
                    className={css`
                      margin: 20px 0 5px;
                      width: 78px;
                      height: 69px;
                    `}
                  /> */}
                </div>
                <hr
                  className={css`
                    border-style: solid;
                    border-width: 0;
                    border-bottom: solid 1px #fff;
                    height: 37px;
                  `}
                />
              </div>
            )}
          </Grid>
        </Grid>
      </div>
    </>
  );
}
