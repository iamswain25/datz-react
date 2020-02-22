import React from "react";
export default (props: React.PropsWithoutRef<{ images: string[] }>) => {
  return (
    <div
      style={{
        height: "calc(100vh - 79px)",
        overflow: "hidden",
        padding: 37,
        position: "relative"
      }}
    >
      <img
        src={props.images[0]}
        alt="image"
        style={{ objectFit: "contain", width: "100%", height: "100%" }}
      />
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 37
        }}
      >
        <div>New Books</div>
        <hr style={{ borderWidth: 1, borderColor: "black", width: 400 }} />
        <div>Nothing Will Ever be the Same Again</div>
        <div>Amanda Marchand</div>
      </div>
    </div>
  );
};
