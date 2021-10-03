import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import withLoadingScreen from "shared/components/Loading";
import { userActions } from "../actions";
import { validator } from "../helpers/validator";
import { ROUTER_PATH } from "../constants";
import Input from "../shared/Input";
import useStyles from "./styles";

import { Button, Paper, Grid, Typography, Container } from "@material-ui/core";

const Login = () => {
  // const Login = ({ showLoading, hideLoading }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  console.log(form);
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleShowPassword = () => setShowPassword(!showPassword);

  const onLogin = (e) => {
    e.preventDefault();
    try {
      dispatch(userActions.login(form));
      // .then((res) => {
      //   localStorage.setItem("token", res.payload.data.token);
      // });
    } catch (error) {
    } finally {
    }

    history.push(ROUTER_PATH.HOME);
  };

  const isFormInvalid =
    validator(form.email, "email") || validator(form.password, "password");

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={6}>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>

        <form className={classes.form} onSubmit={onLogin}>
          <Grid container spacing={2}>
            {" "}
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
