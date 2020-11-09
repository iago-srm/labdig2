import React from "react";
import { Switch, Route } from "react-router-dom";

import { HomeLoadable } from "../home/home.loadable";
import { DashboardRouter } from "../dashboard/dashboard.router";

export const AppRouter = () => {
  return (
    <Switch>
      <Route path="/dashboard" component={DashboardRouter} />
      <Route path="/" component={HomeLoadable} />
    </Switch>
  );
};
