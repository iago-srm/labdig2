import * as React from "react";

import { Route } from "react-router";

import { DashboardPage } from "./dashboard.page";

export const DashboardRouter: React.FC<{}> = () => {
  return (
    <>
      <Route exact={true} path="/dashboard" component={ DashboardPage } />
    </>
  );
};

