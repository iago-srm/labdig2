import loadable from "@loadable/component";

export const HomeLoadable = loadable(
  () => import(/* webpackChunkName: "home.router" */ "./home.router")
);
