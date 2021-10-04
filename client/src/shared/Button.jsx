import React from "react";

const Button = ({
  text,
  onClick,
  className,
  textClassName,
  containerClassName,
  disabled,
}) => {
  const buttonContainerClassName = containerClassName
    ? ["button-container"].concat([containerClassName]).join(" ")
    : "button-container";
  return (
    <div className={buttonContainerClassName}>
      <button onClick={onClick} className={className} disabled={disabled}>
        {text}
      </button>
    </div>
  );
};

export default Button;
