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
  if (isInit) {
    return <div>"loading..."</div>;
  } else if (error) {
    return <div>JSON.stringify(error)</div>;
  }
  console.log(user);
  return (
    <Route
      {...rest}
      render={props =>
        !!user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
