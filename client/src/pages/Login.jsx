import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import withLoadingScreen from "shared/components/Loading";
import { userActions } from "../../actions";
import { validator } from "../../helpers/validator";
import { ROUTER_PATH } from "../../constants";
import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";

const Login = () => {
  // const Login = ({ showLoading, hideLoading }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "ulrich@vertics.co",
    password: "Carter123!!!!",
  });
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      //   showLoading();
      await dispatch(userActions.login(form)).then((res) => {
        localStorage.setItem("token", res.payload.data.token);
      });
    } catch (error) {
    } finally {
      //   hideLoading();
    }

    history.push(ROUTER_PATH.HOME);
  };

  const isFormInvalid =
    validator(form.email, "email") || validator(form.password, "emptyField");
  return (
    <div className="login-page page">
      <form className="login-page__form" onSubmit={onLogin}>
        <Input
          type="email"
          name="email"
          placeholder="Sähköposti"
          value={form.email}
          onChange={handleChange}
          hasError={validator(form.email, "email")}
          error="email_invalid"
        />
        <Input
          type="password"
          name="password"
          placeholder="Salasana"
          value={form.password}
          onChange={handleChange}
          hasError={validator(form.password, "emptyField")}
          error="password_invalid"
        />

        <Button
          type="submit"
          text="Kirjaudu"
          onClick={onLogin}
          disabled={isFormInvalid}
        />
      </form>
    </div>
  );
};

export default withLoadingScreen(Login);
