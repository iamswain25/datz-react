import React from "react";
import FullPageRollingImages from "../components/FullPageRollingImages";
import FullPageRollingImages2 from "../components/FullPageRollingImages2";
import HomeEvent from "../components/HomeEvent";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Divider from "../components/Divider";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import useCollection from "../utils/useCollection";
export default () => {
  const collection = useCollection("main");
  const items = React.useMemo(() => {
    const c = collection || [];
    const publication = c.filter((d) => d.collection === "publication");
    const exhibition = c.filter((d) => d.collection === "exhibition");
    const event = c.filter((d) => d.collection === "event");
    return { publication, exhibition, event };
  }, [collection]);
  const { publication, exhibition, event } = items;
  const isDesktop = useDesktop(true);
  return (
    <>
      <Header sticky />
      <FullPageRollingImages items={publication} />
      <Divider
        className={css`
          margin-left: ${isDesktop ? 47 : 17}px;
          margin-right: ${isDesktop ? 47 : 17}px;
        `}
      />
      <FullPageRollingImages2 items={exhibition} />
      <Divider
        className={css`
          margin-left: ${isDesktop ? 47 : 17}px;
          margin-right: ${isDesktop ? 47 : 17}px;
        `}
      />
      <HomeEvent items={event} />
      <Footer />
    </>
  );
};
