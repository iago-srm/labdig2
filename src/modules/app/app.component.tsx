import * as React from "react";
import { GlobalStyle }from '../../style/global';
import { AppRouter } from "./app.router";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppRouter />
    </BrowserRouter>
  );
};
