import React from "react";
import { NativeRouter, Route, Switch } from "react-router-native";
import Home from "../screens/Home";
import Query from "../screens/Query";
import Mutation from "../screens/Mutation";

const Routes = () => {
  return (
    <NativeRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/query" component={Query} />
        <Route exact path="/mutation" component={Mutation} />
      </Switch>
    </NativeRouter>
  );
};

export default Routes;
