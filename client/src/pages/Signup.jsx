import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { validator, defaultValidatorError } from "../../helpers/validator";

// Actions
import { userActions } from "../../actions";

// Components
import Button from "../../shared/components/Button";
import Input from "../../shared/components/Input";

// Constants
import { ROUTER_PATH } from "../../constants";

// Reducers

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSignup = (e) => {
    e.preventDefault();
    return dispatch(userActions.signup(form)).then(() =>
      setIsConfirmationStep(true)
    );
  };

  const toLoginPage = () => {
    history.push(ROUTER_PATH.LOGIN);
    setIsConfirmationStep(false);
  };

  const renderConfirmation = () => {
    return (
      <div className="container">
        <div className="description">
          {t("sign_up.account_has_been_created")}
        </div>
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
      <form className="form__container">
        <Input
          type="email"
          name="email"
          placeholder="Email"
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
        <Input
          type="input"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <Button
          type="submit"
          text="Sign up"
          onClick={onSignup}
          disabled={isFormInvalid}
        />
      </form>
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
export default SignUp;
