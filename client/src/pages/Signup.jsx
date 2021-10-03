import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { validator } from "../helpers/validator";
import axios from "axios";
import { withRouter } from "react-router-dom";

// Actions
import { userActions, sensorActions } from "../actions";

// Components

import { Button, Paper, Grid, Typography, Container } from "@material-ui/core";
import useStyles from "./styles";

import Input from "../shared/Input";

// Constants
import { ROUTER_PATH } from "../constants";

// Reducers

const SignUp = () => {
  const [isConfirmationStep, setIsConfirmationStep] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [form, setForm] = useState({
    // name:'',
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSignup = (e) => {
    console.log("signed", form);
    e.preventDefault();
    return dispatch(userActions.signup(form)).then((res) => {
      // history.push(ROUTER_PATH.HOME);

      const token = res?.payload?.data?.result?.accessToken;
      console.log("token", !!token);
      if (token)
        return dispatch(sensorActions.fetchAllSensors(token)).then((res) =>
          history.push(ROUTER_PATH.HOME)
        );
      console.log("aws", token);
    });
    // .then(() => setIsConfirmationStep(true));
    // https://localhost:5000/user/signup
    return axios
      .post("http://localhost:5000/user/signup", form, {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      })
      .then((res) => {
        console.log(res);
        // history.push("/");
      })
      .catch((err) => {
        console.log("err", err);
        // dispatch({
        //   type: GET_ERRORS,
        //   payload: err.data.message,
        // });
      });
  };

  const toLoginPage = () => {
    history.push(ROUTER_PATH.LOGIN);
    setIsConfirmationStep(false);
  };

  const renderConfirmation = () => {
    return (
      <div className="container">
        <div className="description">Account_has_been_created</div>
        <Button
          text="Go to login"
          onClick={toLoginPage}
          disabled={isFormInvalid}
        />
      </div>
    );
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

  return (
    <div className="signup page">
      {isConfirmationStep ? renderConfirmation() : renderForm()}
    </div>
  );
};
export default withRouter(SignUp);
