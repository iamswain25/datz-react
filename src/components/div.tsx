import React from "react";
import { css } from "emotion";
export const Flex = (
  props: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>
) => (
  <div
    {...props}
    className={css`
      display: flex;
      flex-direction: column;
      ${props.className}
    `}
  >
    {props.children}
  </div>
);
export const F0 = (
  props: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>
) => (
  <div
    className={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `}
    {...props}
  >
    {props.children}
  </div>
);
export const F1 = (
  props: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>
) => (
  <div
    className={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
    `}
    {...props}
  >
    {props.children}
  </div>
);
export const FlexRow = (
  props: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>
) => (
  <div
    {...props}
    className={css`
      display: flex;
      flex-direction: row;
      align-items: center;
      ${props.className}
    `}
  >
    {props.children}
  </div>
);
