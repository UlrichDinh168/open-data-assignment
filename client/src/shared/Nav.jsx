import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/userActions";
import Button from "./Button";
import { ROUTER_PATH } from "../constants";
const Nav = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const history = useHistory();

  const signOut = () => {
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
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
      <div className="container">
        {isAuthenticated ? (
          <Button onClick={signOut} text="Logout" />
        ) : (
          guestLinks()
        )}
      </div>
    </nav>
  );
};

export default Nav;
