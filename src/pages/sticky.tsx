import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <img
      src="https://walker-web.imgix.net/cms/ex2015hm_ins_gal2_008_1.jpg?auto=format,compress&w=1200"
      style={{
        width: "100wh",
        height: "100vh",
        objectFit: "cover",
        position: "sticky",
        top: 0,
      }}
    />
    <div style={{ height: 300 }}>a</div>
    <div style={{ height: 300 }}>a</div>
    <div style={{ height: 300 }}>a</div>
    <div style={{ height: 300 }}>a</div>
    <div style={{ height: 300 }}>a</div>
    <div style={{ height: 300 }}>a</div>
    <div style={{ height: 300 }}>a</div>
    <div style={{ height: 300 }}>a</div>
    <div style={{ height: 300 }}>a</div>
    <div style={{ height: 300 }}>a</div>
    <div style={{ height: 300 }}>a</div>
  </Layout>
)

export default IndexPage
