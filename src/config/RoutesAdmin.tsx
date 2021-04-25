import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AdminHome from "../pages/AdminHome";
import AdminMe from "../pages/AdminMe";
export default function RoutesAdmin() {
  return (
    <Switch>
      <Route exact path="/admin/me" component={AdminMe} />
      <Route path="/admin/:collection" component={AdminHome} />
      <Route path="/admin/:collection/:type" component={AdminHome} />
      <Route exact path="/admin" component={AdminHome} />
      <Route path="*">
        <Redirect to="/admin" />
      </Route>
    </Switch>
  );
}
