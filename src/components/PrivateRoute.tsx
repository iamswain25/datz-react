import React from "react";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
export default ({
  component: Component,
  ...rest
}: {
  component: (props: RouteComponentProps) => JSX.Element;
  [any: string]: any;
}) => {
  const [user, isInit, error] = useAuthState(auth);
  return (
    <Route
      {...rest}
      render={props =>
        !!user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
