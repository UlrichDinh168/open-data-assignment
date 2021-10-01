import React, { useState } from "react";
import passwordOnIcon from "../assets/eye-outline.svg";
import passwordOffIcon from "../assets/eye-off-outline.svg";

const Input = ({
  type,
  label,
  onChange,
  disabled,
  autoFocus,
  value,
  placeholder,
  name,
  className,
  id,
  containerClassName,
  hasError,
  error,
  onClick,
}) => {
  const [passwordToggle, setPasswordToggle] = useState(false);

  const labelEl = label && <label className="label">{label}</label>;

  // Input class name
  const inputClassName = className ? className.split(" ") : [];

  const inputContainerClassName = containerClassName
    ? containerClassName.split(" ")
    : [];

  inputContainerClassName.push("input__container");

  return (
    <div className={inputContainerClassName.join(" ")}>
      {labelEl}
      <div className="input-field__input-content">
        {type === "password" ? (
          <>
            <input
              type={passwordToggle ? "text" : type}
              name={name}
              value={value}
              placeholder={placeholder}
              onChange={onChange}
              id={id}
              disabled={disabled}
              autoFocus={autoFocus}
              className={inputClassName.join(" ")}
            />
            <button
              className="btn btn--transparent input-password-toggle "
              onClick={(e) => {
                e.preventDefault();
                setPasswordToggle(!passwordToggle);
              }}
              type="button"
            >
              <img
                className="input-password-toggle--icon"
                src={passwordToggle ? passwordOnIcon : passwordOffIcon}
                alt={"i"}
              />
            </button>
          </>
        ) : (
          <>
            <input
              type={type}
              name={name}
              value={value}
              placeholder={placeholder}
              onChange={onChange}
              disabled={disabled}
              onClick={onClick}
              className={inputClassName.join(" ")}
              autoFocus={autoFocus}
            />
          </>
        )}
      </div>
      {hasError ? <span className="error">{error}</span> : null}
    </div>
  );
};

export default Input;
