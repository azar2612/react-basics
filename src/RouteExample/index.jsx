import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';


const RouteEx = () => <p>Route Example Home</p>;

const RouteExNested = () => <p>Route Example Nested</p>;

const RouteExample = () => (
  <>
    <ul>
      <li><Link style={{ color: 'red' }} to="/route-example">Home</Link></li>
      <li><Link style={{ color: 'red' }} to="/route-example/nested">Nested</Link></li>
    </ul>
    <Switch>
      <Route exact path="/route-example" component={RouteEx} />
      <Route exact path="/route-example/nested" component={RouteExNested} />
    </Switch>
  </>
);

export default RouteExample;
