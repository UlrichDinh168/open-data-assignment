import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";

import setJwtToken from "./helpers/setJwtToken";
import store from "./store";
import { ROUTER_PATH } from "./constants";
import { setCurrentUser, logout } from "./actions/userActions";

import Nav from "./shared/Nav";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectedRoute from "./auth/ProtectedRoute";

if (localStorage.token) {
  setJwtToken(localStorage.token);
  const decodedToken = jwt_decode(localStorage.token);
  store.dispatch(setCurrentUser(decodedToken));

  const currentTime = Date.now() / 1000;
  if (decodedToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = ROUTER_PATH.SIGNUP;
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Route exact path={ROUTER_PATH.SIGNUP} component={Signup} />
        <Route exact path={ROUTER_PATH.LOGIN} component={Login} />
        <Switch>
          <ProtectedRoute exact path={ROUTER_PATH.HOME} component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
