import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import { LayoutSplashScreen } from "../../../_metronic";
import Cartas from "./container/Cartas"
import ManejoDatos from "./container/ManejoDatos"
import GestionUsuarios from "./container/GestionUsuarios"


export default function HomePage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <Route path="/escritorio" component={Dashboard} />
        <Route path="/datos" component={ManejoDatos} />
        <Route path="/cartas" component={Cartas} />
        <Route path="/ayuda" component={Dashboard} />
        <Route path="/usuarios" component={GestionUsuarios} />
        {/*-----*/}
        <Redirect to="/error/error-v1" />
      </Switch>
    </Suspense>
  );
}
