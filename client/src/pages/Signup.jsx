import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { validator } from "../helpers/validator";
import { withRouter } from "react-router-dom";
// Actions
import { userActions, sensorActions, notificationActions } from "../actions";
// Components
import { Button, Paper, Grid, Typography, Container } from "@material-ui/core";
import useStyles from "./styles";
import Input from "../shared/Input";
// Constants
import { ROUTER_PATH, NOTIFICATION_TYPE } from "../constants";
// Reducers
const timeLapse = 60 * 60 * 1000; // 1 hour

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const logout = () => {
    dispatch(userActions.logout());
    history.push(ROUTER_PATH.LOGIN);
  };

  const onSignup = (e) => {
    e.preventDefault();
    return dispatch(userActions.signup(form)).then((res) => {
      const token = res?.payload?.data?.result?.accessToken;
      localStorage.setItem("accessToken", JSON.stringify(token));
      setTimeout(() => {
        logout();
        dispatch(
          notificationActions.showNotification({
            type: NOTIFICATION_TYPE.warning,
            message: "Token has expired. Please login again",
          })
        );
      }, timeLapse);
      if (token)
        return dispatch(sensorActions.fetchAllSensors(token)).then((res) =>
          history.push(ROUTER_PATH.HOME)
        );
    });
  };

  const renderForm = () => {
    return (
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={6}>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <form className={classes.form} onSubmit={onSignup}>
            <Grid container spacing={2}>
              <Input name="name" label="Name" handleChange={handleChange} />

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
                Sign up
              </Button>
            </Grid>
          </form>
        </Paper>
      </Container>
    );
  };
  const isFormInvalid =
    validator(form.email, "email") || validator(form.password, "emptyField");

  return <div className="signup page">{renderForm()}</div>;
};
export default withRouter(SignUp);
