import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SnackBar from "./shared/SnackBar";
import { store } from "./store";
import { ROUTER_PATH } from "./constants";

import Nav from "./shared/Nav";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectedRoute from "./auth/ProtectedRoute";

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
      <SnackBar />
    </Provider>
  );
};

export default App;
