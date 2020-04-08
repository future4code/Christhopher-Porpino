import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";

import Login from '../Login';
import Home from '../Home';
import SignUp from '../SignUp';
import ChangePassword from '../ChangePassword';
import VideoUpload from "../VideoUpload";
// import InitialPage from '../Initial/index'
// import Address from '../Address/index'
// import SearchPage from '../SearchPage';
// import Profile from '../Profile/index'
// import EditProfile from '../EditProfile/index'
// import EditAddress from '../EditAddress/index'


export const routes = {
  root: '/',
  login: '/login/',
  home: '/home/',
  signUp: '/signup/',
  changePassword: '/change-password/',
  videoUpload: '/video-upload/'
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        {/* <Route exact path={routes.root} component={InitialPage} /> */}
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.signUp} component={SignUp} />
        <Route exact path={routes.changePassword} component={ChangePassword} />
        <Route exact path={routes.videoUpload} component={VideoUpload} />

        {/*        <Route exact path={routes.search} component={SearchPage} />
        <Route exact path={routes.restaurants} component={SelectedRestaurant} />
        <Route exact path={routes.cart} component={Cart} />
        <Route exact path={routes.profile} component={Profile} />
        <Route exact path={routes.editProfile} component={EditProfile} />
        <Route exact path={routes.editAddress} component={EditAddress} />         */}
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
