import React from "react"
export default (
  props: React.PropsWithChildren<{ style?: React.CSSProperties }>
) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      ...props.style,
    }}
  >
    {props.children}
  </div>
)
