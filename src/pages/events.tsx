import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import FullPageRollingImages from "../components/FullPageRollingImages";
import EventCoverPage from "../components/EventCoverPage";
import "../components/i18n";
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FullPageRollingImages images={[require("../images/cover.jpg")]} />
    <FullPageRollingImages images={[require("../images/cover2.jpg")]} />
    <EventCoverPage />
  </Layout>
);

export default IndexPage;
