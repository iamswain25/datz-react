import React from "react";
export default () => {
  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
        padding: 37,
        position: "relative",
        display: "flex",
        flexDirection: "row"
      }}
    >
      <img src={require("../images/half.jpg")} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <img src={require("../images/event1.jpg")} />
        <p>From South Korea to NYPL: Datz Press</p>
        <p>
          During 2019, Datz Museum of Art organized three exhibitions based on
          the theme of pluralistic space. Starting with a poetic space made by
          combining text and image (Image Poetics), followed by a painterly
          space where the texture of abstraction became the temperature of
          lyricism and narrative.
        </p>
        <div>
          <img src={require("../images/event2.jpg")} />
          <img src={require("../images/event3.jpg")} />
        </div>
      </div>
    </div>
  );
};
