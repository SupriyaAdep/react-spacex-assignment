import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SpaceXLaunches from './components/Launches';
import SpaceXHistory from './components/History';

const AppRouting = props => {
  return (
    <Switch>
      <Route exact path="/">
        <SpaceXHistory></SpaceXHistory>
      </Route>
      <Route exact path="/spaceX-history">
        <SpaceXHistory></SpaceXHistory>
      </Route>
      <Route exact path="/spaceX-launches">
        <SpaceXLaunches></SpaceXLaunches>
      </Route>
    </Switch>
  );
};

export default AppRouting;
