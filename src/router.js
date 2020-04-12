import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
export default function AppRouter() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/register" component={Signup} />
      <Route exact path="/" component={() => <h1>hello</h1>} />
    </Switch>
  );
}
