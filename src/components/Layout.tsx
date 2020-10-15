import React from "react";
import { Switch, Route } from "react-router-dom";
import { css } from "emotion";
export default function Layout({ children }: React.PropsWithChildren<any>) {
  return (
    <Switch>
      <Route
        path={[
          "/artist/:address/images/:index",
          "/events/:filter",
          "/artist/:address",
          "/exhibitions/:filter",
          "/about",
          "/about/datzpress",
          "/about/darkroom",
          "/about/datzmuseum",
          "/contact",
          "/support",
          "/newslist",
          "/newslist/:filter",
          "/search",
          "/search/:filter",
          "/news/:address",
        ]}
        render={() => (
          <main
            className={css`
              min-height: 100vh;
              background-color: #afafaf;
              color: #ffffff;
              position: relative;
              font-family: datz-medium;
            `}
          >
            <main
              className={css`
                margin: 0 auto;
                max-width: 1920px;
              `}
            >
              {children}
            </main>
          </main>
        )}
      />
      <Route
        path="*"
        render={() => (
          <main
            className={css`
              margin: 0 auto;
              max-width: 1920px;
              color: #707070;
            `}
          >
            {children}
          </main>
        )}
      />
    </Switch>
  );
}
