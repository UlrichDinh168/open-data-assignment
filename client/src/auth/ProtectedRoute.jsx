import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoute = ({
  component: Component,
  unauthenticatedRedirect = "/login",
  ...rest
}) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (!isAuthenticated) {
    return <Redirect to={unauthenticatedRedirect} />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default ProtectedRoute;
