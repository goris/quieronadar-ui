import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SwimmingPools from './components/SwimmingPools';
import Events from './components/Events';
import Home from './components/Home';
import Categories from './components/Categories';
import OneSwimmingPool from './components/OneSwimmingPool';
import { useParams, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

export default function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <h1 className="mt-3"> Quiero nadar MX </h1>
          <hr className="mb-3"></hr>
        </div>


        <div className="row">
          <div className="col-md-2">
            <nav>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/swimming-pools">Swimming Pools</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/by-category">Categories</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/events">Events</Link>
                </li>
              </ul>

            </nav>

          </div>
          <div className="col-md-10">
            <Switch>
              <Route path="/swimming-pool/:id" component={OneSwimmingPool} />
              <Route path="/swimming-pools">
                <SwimmingPools />
              </Route>
              <Route exact path="/by-category">
                <CategoryPage />
              </Route>

              <Route
                exact
                path="/by-category/open"
                render={(props) => <Categories {...props} name={`Open`} />}
              />

              <Route
                exact
                path="/by-category/closed"
                render={(props) => <Categories {...props} name={`Closed`} />}
              />

              <Route path="/events">
                <Events />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>

          </div>
        </div>
      </div>
    </Router>
  );
}

function CategoryPage() {

  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2> Categories </h2>

      <ul>
        <li><Link to={`${path}/open`}>Open</Link></li>
        <li><Link to={`${path}/closed`}>Closed</Link></li>
      </ul>
    </div>
  );
}