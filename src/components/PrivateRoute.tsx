import React from "react";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import LoadingCenter from "./LoadingCenter";
import useTitle from "../utils/useTitle";
export default function PrivateRoute({
  component: Component,
  ...rest
}: {
  component: (props: RouteComponentProps) => any;
  [any: string]: any;
}) {
  const [user, isInit, error] = useAuthState(auth);
  useTitle();
  if (isInit) {
    return <LoadingCenter />;
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
}
