import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomeScreen from "../Home";
import FormPage from "../FormPage";
import ApplicationsPage from "../ApplicationsPage";
import CreateTrip from "../CreateTrip";
import ListTripsPage from "../ListTripsPage";
import TripDetailsPage from "../TripDetailsPage";



export const routes = {
  root: "/",
  formPage: "/application-form",
  login: "/login",
  createTrip: "/trips/create",
  tripsList: "/trips/list",
  tripDetails: "/trips/details",
  applications: "/applications"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={HomeScreen} />

        <Route path={routes.formPage} component={FormPage} />

        <Route path={routes.login} component={LoginPage} />

        <Route path={routes.createTrip} component={CreateTrip} />

        <Route path={routes.applications} component={ApplicationsPage} /> 

        <Route path={routes.tripDetails} component={TripDetailsPage} />

        <Route path={routes.tripsList} component={ListTripsPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
