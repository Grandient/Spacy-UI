import React from "react";

import { ButtonProps } from "./Button.types";

import "./Button.scss";

const Button: React.FC<ButtonProps> = ({ theme }) => (
  <div
    data-testid="button"
    className={`button button-${theme}`}
  >
    <h1 className="heading">Button</h1>
  </div>
);

export default Button;
