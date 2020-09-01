import React from "react";
import ReactLinkify from "react-linkify";

export default function Linkify({ children }: React.PropsWithChildren<{}>) {
  return (
    <ReactLinkify
      componentDecorator={(decoratedHref, decoratedText, key) => (
        <a target="blank" href={decoratedHref} key={key}>
          {decoratedText}
        </a>
      )}
    >
      {children}
    </ReactLinkify>
  );
}
