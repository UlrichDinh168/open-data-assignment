import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { userActions } from "../actions";
import { ROUTER_PATH } from "../constants";
const Nav = () => {
  const user = useSelector((state) => state.user.user);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch(userActions.logout());
    history.push(ROUTER_PATH.LOGIN);
  };

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Toolbar className={classes.toolbar}>
        {isAuthenticated ? (
          <div className={classes.profile}>
            {user.name && (
              <Typography className={classes.userName} variant="h6">
                Welcome {user.name}
              </Typography>
            )}

            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <div className={classes.unauthorizedContainer}>
            <Button
              component={Link}
              to={ROUTER_PATH.LOGIN}
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
            <Button
              component={Link}
              to={ROUTER_PATH.SIGNUP}
              variant="contained"
              color="primary"
            >
              Sign up
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
