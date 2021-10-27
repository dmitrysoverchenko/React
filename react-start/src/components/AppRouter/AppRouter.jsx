import React from "react";
import { Route, Switch } from "react-router-dom";
import Cards from "../../pages/Cards/Cards";
import Favorite from "../../pages/Favorite/Favorite";
import Cart from "../../pages/Cart/Cart";

const AppRouter = () => (
  <Switch>
    <Route exact path={"/"}>
      <Cards />
    </Route>
    <Route path={"/favorite"}>
      <Favorite />
    </Route>
    <Route path={"/cart"}>
      <Cart />
    </Route>
  </Switch>
);

export default AppRouter;
