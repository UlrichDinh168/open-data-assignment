import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import withLoadingScreen from "../shared/Loading";
import { userActions, sensorActions, notificationActions } from "../actions";
// import { validator } from "../helpers/validator";
import { ROUTER_PATH, NOTIFICATION_TYPE } from "../constants";
import Input from "../shared/Input";
import useStyles from "./styles";
import { Button, Paper, Grid, Typography, Container } from "@material-ui/core";

const timeLapse = 60 * 60 * 1000; // 1 hour

// const Login = () => {
const Login = ({ showLoading, hideLoading }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const logout = () => {
    dispatch(userActions.logout());
    history.push(ROUTER_PATH.LOGIN);
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleShowPassword = () => setShowPassword(!showPassword);

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      // showLoading();
      await dispatch(userActions.login(form)).then((res) => {
        const token = res?.payload?.data?.result?.accessToken;
        localStorage.setItem("accessToken", JSON.stringify(token));
        setTimeout(() => {
          logout();
          dispatch(
            notificationActions.showNotification({
              type: NOTIFICATION_TYPE.warning,
              message: "Token has expired. Please login again",
            }),
          );
        }, timeLapse);
        if (token)
          return dispatch(sensorActions.fetchAllSensors(token)).then((res) =>
            history.push(ROUTER_PATH.HOME),
          );
      });
    } catch (error) {
    } finally {
      // hideLoading();
    }
  };

  // const isFormInvalid =
  //   validator(form.email, "email") || validator(form.password, "password");

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={6}>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>

        <form className={classes.form} onSubmit={onLogin}>
          <Grid container spacing={2}>
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign in
            </Button>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
