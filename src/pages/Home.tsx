import React from "react";
import FullPageRollingImages from "../components/FullPageRollingImages";
import FullPageRollingImages2 from "../components/FullPageRollingImages2";
import HomeEvent from "../components/HomeEvent";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useBanners from "../utils/useBanners";
import Divider from "../components/Divider";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
export default () => {
  const data1 = useBanners("home", "New Books");
  const data2 = useBanners("home", "Current Exhibition");
  const isDesktop = useDesktop();
  return (
    <>
      <Header sticky />
      <FullPageRollingImages items={data1} />
      <Divider
        className={css`
          margin-left: ${isDesktop ? 47 : 17}px;
          margin-right: ${isDesktop ? 47 : 17}px;
        `}
      />
      <FullPageRollingImages2 items={data2} />
      <Divider
        className={css`
          margin-left: ${isDesktop ? 47 : 17}px;
          margin-right: ${isDesktop ? 47 : 17}px;
        `}
      />
      <HomeEvent />
      <Footer />
    </>
  );
};
