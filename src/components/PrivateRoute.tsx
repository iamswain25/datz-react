import React from "react";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
export default ({
  component: Component,
  ...rest
}: {
  component: (props: RouteComponentProps) => any;
  [any: string]: any;
}) => {
  const [user, isInit, error] = useAuthState(auth);
  if (isInit) {
    return <div>"loading..."</div>;
  } else if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        !!user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
