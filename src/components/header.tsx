import React from "react";
import Headroom from "react-headroom";
import FlexCenter from "../components/FlexCenter";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
export default () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  if (isDesktopOrLaptop)
    return (
      <Headroom
        style={{
          height: 79,
          marginLeft: 37,
          marginRight: 37,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <FlexCenter>
          <Link style={{ marginLeft: 37 }} to="/">
            datz
          </Link>
          <Link style={{ marginLeft: 37 }} to="/">
            Publication
          </Link>
          <Link style={{ marginLeft: 37 }} to="/">
            Artist Projects
          </Link>
          <Link style={{ marginLeft: 37 }} to="/">
            Exhibition
          </Link>
          <Link style={{ marginLeft: 37 }} to="/">
            Events
          </Link>
        </FlexCenter>
        <FlexCenter>
          <Link to="/">Store</Link>
        </FlexCenter>
        <FlexCenter>
          <Link to="/">Search</Link>
          <button onClick={console.log}>EN</button>/
          <button onClick={console.log}>KR</button>
        </FlexCenter>
      </Headroom>
    );
  else {
    return null;
  }
};
