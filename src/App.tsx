import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Publication from "./pages/Publication";
import PublicationItem from "./pages/PublicationItem";
import PublicationReadmore from "./pages/PublicationReadmore";
import PrivateRoute from "./components/PrivateRoute";
import AdminHome from "./pages/AdminHome";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/publication" component={Publication} />
        <Route exact path="/publication/:id" component={PublicationItem} />
        <Route exact path="/publication/:id/readmore" component={PublicationReadmore} />
        <Route exact path="/login" component={Signin} />
        <PrivateRoute path="/admin" component={AdminHome} />
      </Switch>
    </Router>
  );
}

export default App;
