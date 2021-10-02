import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { logout } from "../actions/userActions";
import { ROUTER_PATH } from "../constants";
const Nav = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch(logout());
    localStorage.removeItem("refreshToken");
    history.push(ROUTER_PATH.LOGIN);
  };

  const guestLinks = () => {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/signup">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Toolbar className={classes.toolbar}>
        {isAuthenticated ? (
          <div className={classes.profile}>
            <Typography className={classes.userName} variant="h6">
              Ulrich
            </Typography>
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
          <>
            <Button
              component={Link}
              to="/login"
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
            <Button
              component={Link}
              to="/signup"
              variant="contained"
              color="primary"
            >
              Sign up
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
