import React from "react";
import FullPageRollingImages from "../components/FullPageRollingImages";
import FullPageRollingImages2 from "../components/FullPageRollingImages2";
import HomeEvent from "../components/HomeEvent";
import Footer from "../components/Footer";
import useDevider from "../components/useDevider";
import Header from "../components/Header";
import useBanners from "../utils/useBanners";
export default () => {
  const devider = useDevider();
  const data1 = useBanners("home", "New Books");
  const data2 = useBanners("home", "Current Exhibition");
  return (
    <>
      <Header sticky />
      <FullPageRollingImages items={data1} />
      {devider}
      <FullPageRollingImages2 items={data2} />
      {devider}
      <HomeEvent />
      <Footer />
    </>
  );
};
