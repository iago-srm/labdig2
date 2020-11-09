import * as React from "react";

import { Route } from "react-router";

import { HomePage } from "./home.page";

const HomeRouter: React.FC<{}> = () => {
  return (
    <>
      <Route exact={true} path="/" component={HomePage} />
    </>
  );
};

export default HomeRouter;
