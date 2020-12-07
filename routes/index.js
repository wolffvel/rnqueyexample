import React from "react";
import { NativeRouter, Route, Switch } from "react-router-native";
import Home from "../screens/Home";
import Query from "../screens/Query";
import Mutation from "../screens/Mutation";
import CustomHook from "../screens/CustomHook";

const Routes = () => {
  return (
    <NativeRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/query" component={Query} />
        <Route exact path="/mutation" component={Mutation} />
        <Route exact path="/custom" component={CustomHook} />
      </Switch>
    </NativeRouter>
  );
};

export default Routes;
