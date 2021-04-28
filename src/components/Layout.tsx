import React from "react";
import { Switch, Route } from "react-router-dom";
import { css } from "emotion";
import { useMobileMenu } from "../store/useGlobalState";
import MenuAside from "./MenuAside";
export default function Layout({ children }: React.PropsWithChildren<any>) {
  const [isOpen] = useMobileMenu();
  return (
    <Switch>
      <Route
        path={[
          "/artist/:address/images",
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
          <section
            className={css`
              min-height: 100vh;
              background-color: #afafaf;
              color: #ffffff;
              position: relative;
              font-family: datz-medium;
            `}
          >
            <section
              className={css`
                margin: 0 auto;
                max-width: 1920px;
              `}
            >
              {isOpen ? <MenuAside /> : children}
            </section>
          </section>
        )}
      />
      <Route
        exact
        path={["/admin/**", "/admin", "/login"]}
        render={() => (
          <section
            className={css`
              min-height: 100vh;
              background-color: #afafaf;
              color: #ffffff;
              position: relative;
              font-family: datz-medium;
            `}
          >
            {children}
          </section>
        )}
      />
      <Route
        path="*"
        render={() => (
          <section
            className={css`
              margin: 0 auto;
              max-width: 1920px;
              color: #707070;
            `}
          >
            {isOpen ? <MenuAside /> : children}
          </section>
        )}
      />
    </Switch>
  );
}
