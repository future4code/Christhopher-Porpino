import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Login from '../Login';
import Home from '../Home';
import SignUp from '../SignUp';
import ChangePassword from '../ChangePassword';
import VideoUpload from "../VideoUpload";
import VideoDetailsPage from "../VideoDetailsPage";
import InitialPage from '../InitialPage'

export const routes = {
  root: '/',
  login: '/login/',
  home: '/home/',
  signUp: '/signup/',
  changePassword: '/change-password/',
  videoUpload: '/video-upload/',
  videoDetails: '/video-details'
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={InitialPage} />
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.signUp} component={SignUp} />
        <Route exact path={routes.changePassword} component={ChangePassword} />
        <Route exact path={routes.videoUpload} component={VideoUpload} />
        <Route exact path={routes.videoDetails} component={VideoDetailsPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
