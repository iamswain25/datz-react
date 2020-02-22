import React from "react";
import FullPageRollingImages from "../components/FullPageRollingImages";
import EventCoverPage from "../components/EventCoverPage";
const IndexPage = () => (
  <>
    <FullPageRollingImages images={[require("../images/cover.jpg")]} />
    <FullPageRollingImages images={[require("../images/cover2.jpg")]} />
    <EventCoverPage />
  </>
);

export default IndexPage;
