import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import Auth from "../Routes/Auth/index";
import Feed from "../Routes/Feed";

const LoggedInRoutes = () => (
  <>
    <Route exact path="/" component={Feed} />
  </>
);

const LoggedOutRoutes = () => (
  <>
    <Route exact path="/" component={Auth} />
  </>
);

const AppRouter = ({ isLoggeddIn }) => (
  <Switch>{isLoggeddIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Switch>
);

AppRouter.propTypes = {
  isLoggeddIn: PropTypes.bool.isRequired
};

export default AppRouter;
