import React, { Suspense } from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
const Signin = React.lazy(() => import("../pages/Signin"));
const Publication = React.lazy(() => import("../pages/Publication"));
const PublicationItem = React.lazy(() => import("../pages/PublicationItem"));
const Event = React.lazy(() => import("../pages/Event"));
const EventItem = React.lazy(() => import("../pages/EventItem"));
const PublicationReadmore = React.lazy(
  () => import("../pages/PublicationReadmore")
);
const PrivateRoute = React.lazy(() => import("../components/PrivateRoute"));
const ArtistPage = React.lazy(() => import("../pages/ArtistPage"));
const About = React.lazy(() => import("../pages/About"));
const Contact = React.lazy(() => import("../pages/Contact"));
const AboutDatzpress = React.lazy(() => import("../pages/AboutDatzpress"));
const AboutDatzmuseum = React.lazy(() => import("../pages/AboutDatzmuseum"));
const AboutDarkroom = React.lazy(() => import("../pages/AboutDarkroom"));
const Events = React.lazy(() => import("../pages/Events"));
const Exhibition = React.lazy(() => import("../pages/Exhibition"));
const Exhibitions = React.lazy(() => import("../pages/Exhibitions"));
const ExhibitionItem = React.lazy(() => import("../pages/ExhibitionItem"));
const ExhibitionReadmore = React.lazy(
  () => import("../pages/ExhibitionReadmore")
);
const ArtistProject = React.lazy(() => import("../pages/ArtistProject"));
const Support = React.lazy(() => import("../pages/Support"));
const News = React.lazy(() => import("../pages/News"));
const NewsItem = React.lazy(() => import("../pages/NewsItem"));
const FullImageGallery = React.lazy(() => import("../pages/FullImageGallery"));
const Search = React.lazy(() => import("../pages/Search"));
const RoutesAdmin = React.lazy(() => import("./RoutesAdmin"));

export default function Routes() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={null}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/publication" component={Publication} />
            <Route exact path="/exhibition" component={Exhibition} />
            <Route exact path="/publication/:id" component={PublicationItem} />
            <Route
              exact
              path="/:type/:id/images"
              component={FullImageGallery}
            />

            <Route exact path="/event" component={Event} />
            <Route exact path="/events">
              <Redirect to="/events/all" />
            </Route>
            <Route exact path="/Exhibitions">
              <Redirect to="/exhibitions/all" />
            </Route>

            <Route exact path="/event/:id" component={EventItem} />
            <Route exact path="/exhibition/:id" component={ExhibitionItem} />
            <Route
              exact
              path="/publication/:id/readmore"
              component={PublicationReadmore}
            />
            <Route
              exact
              path="/exhibition/:id/readmore"
              component={ExhibitionReadmore}
            />
            <Route exact path="/artist/:id" component={ArtistPage} />
            <Route exact path="/artist-project" component={ArtistProject} />
            <Route exact path="/login" component={Signin} />
            <Route exact path="/events/:filter" component={Events} />
            <Route exact path="/exhibitions/:filter" component={Exhibitions} />
            <Route exact path="/about" component={About} />
            <Route exact path="/about/datzpress" component={AboutDatzpress} />
            <Route exact path="/about/darkroom" component={AboutDarkroom} />
            <Route exact path="/about/datzmuseum" component={AboutDatzmuseum} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/search/:filter/:query" component={Search} />
            <Route exact path="/search/:filter" component={Search} />
            <Route exact path="/search">
              <Redirect to="/search/all/" />
            </Route>
            <Route exact path="/support" component={Support} />
            <Route exact path="/newslist">
              <Redirect to="/newslist/all" />
            </Route>
            <Route exact path="/news">
              <Redirect to="/newslist/all" />
            </Route>
            <Route exact path="/newslist/:filter" component={News} />
            <Route exact path="/news/:id" component={NewsItem} />
            <PrivateRoute path="/admin" component={RoutesAdmin} />
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  );
}
