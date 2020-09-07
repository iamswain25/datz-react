import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Publication from "../pages/Publication";
import PublicationItem from "../pages/PublicationItem";
import Event from "../pages/Event";
import EventItem from "../pages/EventItem";
import PublicationReadmore from "../pages/PublicationReadmore";
import PrivateRoute from "../components/PrivateRoute";
import AdminHome from "../pages/AdminHome";
import ArtistPage from "../pages/ArtistPage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import AboutDatzpress from "../pages/AboutDatzpress";
import AboutDatzmuseum from "../pages/AboutDatzmuseum";
import AboutDarkroom from "../pages/AboutDarkroom";
import Events from "../pages/Events";
import Exhibition from "../pages/Exhibition";
import Exhibitions from "../pages/Exhibitions";
import ExhibitionItem from "../pages/ExhibitionItem";
import ExhibitionReadmore from "../pages/ExhibitionReadmore";
import ArtistProject from "../pages/ArtistProject";
import Support from "../pages/Support";
import News from "../pages/News";
import NewsItem from "../pages/NewsItem";
import FullImageGallery from "../pages/FullImageGallery";
import Layout from "../components/Layout";
export default function Routes() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/publication" component={Publication} />
          <Route exact path="/exhibition" component={Exhibition} />
          <Route exact path="/publication/:address" component={PublicationItem} />
          <Route
            exact
            path="/publication/:address/images/:index"
            render={() => <FullImageGallery type="publication" />}
          />
          <Route
            exact
            path="/exhibition/:address/images/:index"
            render={() => <FullImageGallery type="exhibition" />}
          />

          <Route exact path="/event" component={Event} />
          <Route exact path="/events">
            <Redirect to="/events/all" />
          </Route>
          <Route exact path="/Exhibitions">
            <Redirect to="/exhibitions/all" />
          </Route>

          <Route exact path="/event/:address" component={EventItem} />
          <Route exact path="/exhibition/:address" component={ExhibitionItem} />
          <Route
            exact
            path="/publication/:address/readmore"
            component={PublicationReadmore}
          />
          <Route
            exact
            path="/exhibition/:address/readmore"
            component={ExhibitionReadmore}
          />
          <Route exact path="/artist/:address" component={ArtistPage} />
          <Route exact path="/artist" component={ArtistProject} />
          <Route exact path="/login" component={Signin} />
          <PrivateRoute path="/admin" component={AdminHome} />
          <Route
            exact
            path="/artist/:address/images/:index"
            render={() => <FullImageGallery type="artist" />}
          />
          <Route exact path="/events/:filter" component={Events} />
          <Route exact path="/exhibitions/:filter" component={Exhibitions} />
          <Route exact path="/about" component={About} />
          <Route exact path="/about/datzpress" component={AboutDatzpress} />
          <Route exact path="/about/darkroom" component={AboutDarkroom} />
          <Route exact path="/about/datzmuseum" component={AboutDatzmuseum} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/support" component={Support} />
          <Route exact path="/news">
            <Redirect to="/news/all" />
          </Route>
          <Route exact path="/news/:filter" component={News} />
          <Route exact path="/newsitem/:address" component={NewsItem} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
